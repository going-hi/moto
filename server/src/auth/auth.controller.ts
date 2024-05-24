import {
	Controller,
	Get,
	Post,
	Body,
	HttpStatus,
	HttpCode,
	Res,
	UnauthorizedException,
	Param,
	UsePipes,
	ValidationPipe,
	Query
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegistrationDto, ChangePasswordDto, ResetPasswordDto, CodeDto } from './dto'
import type { CookieOptions, Response } from 'express'
import { Cookie, User } from '@/common/decorators'
import { AccessGuard, RefreshGuard } from './guards'
import { ConfigService } from '@nestjs/config'
import { isUUID } from 'class-validator'
import { ApiTags } from '@nestjs/swagger'
import { AuthSwaggerController } from './swagger'
@ApiTags('Auth')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {}

	private readonly refreshCookieOptions: CookieOptions = {
		httpOnly: true,
		maxAge: 30 * 24 * 60 * 60 * 1000
	}

	@AuthSwaggerController.login()
	@HttpCode(HttpStatus.OK)
	@Post('login')
	async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
		const {
			tokens: { refreshToken, accessToken },
			profile
		} = await this.authService.login(dto)

		res.cookie('refresh', refreshToken, this.refreshCookieOptions)

		return { accessToken, profile }
	}

	@AuthSwaggerController.registration()
	@HttpCode(HttpStatus.OK)
	@Post('registration')
	async registration(@Body() dto: RegistrationDto, @Res({ passthrough: true }) res: Response) {
		const {
			tokens: { refreshToken, accessToken },
			profile
		} = await this.authService.registration(dto)

		res.cookie('refresh', refreshToken, this.refreshCookieOptions)

		return { accessToken, profile }
	}

	@AuthSwaggerController.refresh()
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

	@AuthSwaggerController.changePassword()
	@AccessGuard()
	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('password/change')
	changePassword(@Body() dto: ChangePasswordDto, @User('id') id: number) {
		return this.authService.changePassword(dto, id)
	}

	@HttpCode(HttpStatus.OK)
	@Get('password/reset')
	resetPassword(@Query() { email }: ResetPasswordDto) {
		return this.authService.generateCodeForReset(email)
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('password/reset/code')
	async codeConfirmation(@Body() dto: CodeDto) {
		return this.authService.codeConfirmation(dto)
	}

	@AuthSwaggerController.logout()
	@HttpCode(HttpStatus.NO_CONTENT)
	@Get('logout')
	logout(@Cookie('refresh') refresh: string, @Res({ passthrough: true }) res: Response) {
		this.authService.logout(refresh)
		res.clearCookie('refresh', { path: this.refreshCookieOptions.path })
		return
	}
	@HttpCode(HttpStatus.OK)
	@AuthSwaggerController.activeLink()
	@Get('active/:link')
	async active(@Param('link') link: string, @Res() res: Response) {
		const is = isUUID(link)
		if (is) await this.authService.active(link)
		return res.redirect(this.configService.get('CLIENT_URL'))
	}
}
