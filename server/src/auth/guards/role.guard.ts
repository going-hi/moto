import { ERoles } from '@/common/enums'
import {
	CanActivate,
	ExecutionContext,
	Injectable,
	SetMetadata,
	UseGuards,
	applyDecorators
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AccessGuard } from './access.guard'

@Injectable()
class RoleGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	public canActivate(context: ExecutionContext): boolean {
		const roles = this.reflector.get<ERoles[]>('jwt_roles', context.getHandler())
		if (!roles) return true

		const req = context.switchToHttp().getRequest()

		const user = req.user

		return roles.some(i => user.role === i)
	}
}

export const RolesAuthGuard = (...roles: ERoles[]) => {
	return applyDecorators(AccessGuard(), SetMetadata('jwt_roles', roles), UseGuards(RoleGuard))
}
