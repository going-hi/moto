import {
	Controller,
	Get,
	Post,
	Body,
	HttpStatus,
	HttpCode,
	Res,
	UnauthorizedException,
	Param
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegistrationDto } from './dto'
import type { CookieOptions, Response } from 'express'
import { Cookie, User } from '@/common/decorators'
import { RefreshGuard } from './guards'
import { ConfigService } from '@nestjs/config'

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {}

	private readonly refreshCookieOptions: CookieOptions = {
		httpOnly: true,
		maxAge: 30 * 24 * 60 * 60 * 1000,
		path: '/api/auth'
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('login')
	async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
		const refreshToken = await this.authService.login(dto)
		res.cookie('refresh', refreshToken, this.refreshCookieOptions)
		return
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('registration')
	async registration(@Body() dto: RegistrationDto, @Res({ passthrough: true }) res: Response) {
		const refreshToken = await this.authService.registration(dto)
		res.cookie('refresh', refreshToken, this.refreshCookieOptions)
		return
	}

	@RefreshGuard()
	@HttpCode(HttpStatus.OK)
	@Get('refresh')
	async refresh(
		@User('id') user: number,
		@Cookie('refresh') refresh: string,
		@Res({ passthrough: true }) res: Response
	) {
		const data = await this.authService.refresh(refresh, user)

		if (!data) {
			res.clearCookie('refresh', { path: this.refreshCookieOptions.path })
			throw new UnauthorizedException()
		}

		const {
			tokens: { accessToken, refreshToken },
			profile
		} = data

		res.cookie('refresh', refreshToken, this.refreshCookieOptions)

		return { accessToken, profile }
	}

	@HttpCode(HttpStatus.OK)
	@Get('logout')
	logout(@Cookie('refresh') refresh: string, @Res({ passthrough: true }) res: Response) {
		this.authService.logout(refresh)
		res.clearCookie('refresh', { path: this.refreshCookieOptions.path })
		return
	}

	@Get('active/:link')
	async active(@Param('link') link: string, @Res() res: Response) {
		await this.authService.active(link)
		return res.redirect(this.configService.get('CLIENT_URL'))
	}
}
