import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
	) {}

	async byId(id: number) {
		const user = await this.userRepository.findOneBy({ id })
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
}
