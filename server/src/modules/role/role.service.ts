import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { SetRoleDto } from './dto'
import { ProfileDto } from '@/auth/dto'

@Injectable()
export class RoleService {
	constructor(private readonly userService: UserService) {}

	async setRoleUser({ role, user }: SetRoleDto) {
		const candidate = await this.userService.changeRole(user, role)
		return new ProfileDto(candidate)
	}
}
