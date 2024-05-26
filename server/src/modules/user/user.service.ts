import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto'
import { ERoles } from '@/common/enums'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
	) {}

	async byId(id: number, withError = false) {
		const user = await this.userRepository.findOneBy({ id })
		if (!user && withError) throw new NotFoundException('Пользователь с таким id не найден')
		return user
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
}
