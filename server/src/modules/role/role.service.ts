import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { SetRoleDto } from './dto'

@Injectable()
export class RoleService {
	constructor(private readonly userService: UserService) {}

	async setRoleUser({ role, user }: SetRoleDto) {
		const candidate = await this.userService.changeRole(user, role)
		return {
			id: candidate.id,
			email: candidate.email,
			name: candidate.name,
			surname: candidate.surname,
			role: candidate.role
		}
	}
}
