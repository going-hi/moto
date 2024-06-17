import { CanActivate, ExecutionContext, Injectable, UseGuards } from '@nestjs/common'
import type { Request } from 'express'
import { TokenService } from '../token.service'

@Injectable()
export class UserNoRequiredGuard implements CanActivate {
	constructor(private readonly tokenService: TokenService) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> {
		const req = context.switchToHttp().getRequest() as Request
		const authorization = req.headers.authorization
		if (!authorization) return true
		const [type, token] = authorization.split(' ')
		if (type !== 'Bearer' || !token) return true
		const userData = this.tokenService.validateAccessToken(token)
		if (!userData) return true
		req.user = userData
		return true
	}
}

export const UserNoRequiredAuthGuard = () => UseGuards(UserNoRequiredGuard)
