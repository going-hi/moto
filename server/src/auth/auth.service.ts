import { BadRequestException, Injectable } from '@nestjs/common'
import {
	RegistrationDto,
	LoginDto,
	RefreshDto,
	JwtPayload,
	ChangePasswordDto,
	ProfileDto
	// RecoveryPasswordDto
} from './dto'
import { HashService } from '@/core/hash/hash.service'
import { UserService } from '@/modules/user/user.service'
import { TokenService } from './token.service'
import { MailService } from '@/mail/mail.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly tokenService: TokenService,
		private readonly hashService: HashService,
		private readonly mailService: MailService
	) {}

	async login({ email, password }: LoginDto) {
		const candidate = await this.userService.byEmail(email)
		if (!candidate) throw new BadRequestException('Пользователь с таким email не найден')

		const isMatch = await this.hashService.compare(password, candidate.password)
		if (!isMatch) throw new BadRequestException('Неверный пароль')

		const { refreshToken } = this.tokenService.generateTokens(candidate)
		await this.tokenService.saveToken(refreshToken, candidate.id)
		return refreshToken
	}

	async registration(dto: RegistrationDto) {
		const candidate = await this.userService.byEmail(dto.email)
		if (candidate) throw new BadRequestException('Пользователь с таким email уже существует')

		const hashPassword = await this.hashService.hash(dto.password)
		const user = await this.userService.create({
			...dto,
			password: hashPassword
		})

		this.mailService.sendActiveLink(user.email, user.link)
		const { refreshToken } = this.tokenService.generateTokens(user)
		await this.tokenService.saveToken(refreshToken, user.id)
		return refreshToken
	}

	async refresh(
		refresh: string,
		userId: number
	): Promise<{
		tokens: RefreshDto
		profile: JwtPayload
	} | null> {
		const tokenFromDb = await this.tokenService.findToken(refresh)
		const profile = await this.userService.byId(userId)

		if (!profile || !tokenFromDb) return null

		const tokens = this.tokenService.generateTokens(profile)
		await this.tokenService.saveToken(tokens.refreshToken, profile.id)

		return {
			tokens,
			profile: new ProfileDto(profile)
		}
	}

	async logout(refresh: string) {
		const token = await this.tokenService.byToken(refresh)
		if (token) await this.tokenService.removeTokenFromDb(refresh)
	}

	// ! потом сделать
	//* async recoveryPassword(dto: RecoveryPasswordDto) {}

	async changePassword(dto: ChangePasswordDto, userId: number) {
		if (dto.newPassword === dto.password) {
			throw new BadRequestException('Нельзя менять на тот же пароль')
		}

		const user = await this.userService.byId(userId)

		const isMatch = await this.hashService.compare(dto.password, user.password)
		if (!isMatch) throw new BadRequestException('Неверный пароль')

		const newHashPassword = await this.hashService.hash(dto.newPassword)
		await this.userService.changePassword(userId, newHashPassword)
		return
	}

	async active(link: string) {
		await this.userService.confirmation(link)
	}
}