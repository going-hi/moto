import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities'
import { Repository } from 'typeorm'
import { CreateUserDto, UpdateUserDto, UserAllQueryDto } from './dto'
import { ERoles } from '@/common/enums'
import { FileService } from '@/core/file/file.service'
import { skipCount } from '@/core/utils'
import { PaginationDto } from '@/common/pagination'
import { MailService } from '@/mail/mail.service'
import { randomUUID } from 'crypto'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
		private readonly fileService: FileService,
		private readonly mailService: MailService
	) {}

	async byId(id: number, withError = false) {
		const user = await this.userRepository.findOneBy({ id })
		if (!user && withError) throw new NotFoundException('Пользователь с таким id не найден')
		return user
	}

	async getAll({ count, page, sortBy, sortOrder }: UserAllQueryDto) {
		const [products, total] = await this.userRepository.findAndCount({
			order: {
				[sortBy]: sortOrder
			},
			take: count,
			skip: skipCount(page, count)
		})
		return new PaginationDto(products, total)
	}

	async byEmail(email: string) {
		const user = await this.userRepository.findOneBy({ email })
		return user
	}

	async byPhone(phone: string) {
		const user = await this.userRepository.findOneBy({ phone })
		return user
	}

	async create(dto: CreateUserDto) {
		const user = this.userRepository.create(dto)
		return await this.userRepository.save(user)
	}

	async confirmation(link: string) {
		const user = await this.userRepository.findOneBy({ link })
		if (!user) return
		if (!user.link) return
		await this.userRepository.save({ ...user, link: null, isConfirm: true })
	}

	async changePassword(id: number, hashPassword: string) {
		return await this.userRepository.update({ id }, { password: hashPassword })
	}

	async setCode(email: string, code: number) {
		const user = await this.byEmail(email)
		if (!user) throw new BadRequestException('Пользователь с таким email не найден')
		if (!user.isConfirm) {
			throw new BadRequestException('Сначала вам следует подтвердить почту')
		}
		user.code = code
		await this.userRepository.save(user)
	}

	async changeRole(id: number, role: ERoles) {
		const user = await this.byId(id, true)
		user.role = role
		return await this.userRepository.save(user)
	}

	async checkCode(email: string, code: number) {
		const user = await this.byEmail(email)
		if (!user) throw new BadRequestException('Пользователь с таким email не найден')

		if (user.code !== code) throw new BadRequestException('Неверный код')
		user.code = null
		return await this.userRepository.save(user)
	}

	async profile(id: number) {
		const user = await this.byId(id, true)
		return user
	}

	async updateAvatar(userId: number, avatar: Express.Multer.File | null) {
		const user = await this.byId(userId, true)
		let url: string | null = null
		if (avatar) {
			url = await this.fileService.uploadFile(avatar)
		} else {
			user.avatar ? await this.fileService.deleteFile(user.avatar) : {}
		}
		user.avatar = url

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { link, code, password, ...updatedUser } = await this.userRepository.save(user)
		return updatedUser
	}

	async update(userId: number, dto: UpdateUserDto) {
		const user = await this.byId(userId, true)
		delete user.isConfirm
		delete user.link
		if (user.phone !== dto.phone) {
			const candidate = await this.byPhone(dto.phone)
			if (candidate) {
				throw new BadRequestException('Пользователь с таким телефоном уже существует')
			}
		}

		if (user.email !== dto.email) {
			console.log('email')
			await this.changeEmail(userId, dto.email)
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { link, code, password, ...updatedUser } = await this.userRepository.save({
			...user,
			...dto
		})
		return updatedUser
	}

	async changeEmail(id: number, newEmail: string) {
		const candidate = await this.byEmail(newEmail)
		if (candidate) {
			throw new BadRequestException('Пользователь с таким email уже существует')
		}
		const link = randomUUID()
		await this.userRepository.update({ id }, { link, isConfirm: false, email: newEmail })
		await this.mailService.sendActiveLink(newEmail, link)
	}
}
