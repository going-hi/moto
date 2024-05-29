import { FindOptionsSelect } from 'typeorm'
import { UserEntity } from '../entities'

export const selectUserDto: FindOptionsSelect<UserEntity> = {
	id: true,
	email: true,
	name: true,
	role: true,
	avatar: true
}
