import { BadRequestException, Injectable } from '@nestjs/common'
import {
	RegistrationDto,
	LoginDto,
	RefreshDto,
	JwtPayload,
	ChangePasswordDto,
	ProfileDto,
	CodeDto
	// RecoveryPasswordDto
} from './dto'
import { HashService } from '@/core/hash/hash.service'
import { UserService } from '@/modules/user/user.service'
import { TokenService } from './token.service'
import { MailService } from '@/mail/mail.service'
import { generateRandomCode, generateRandomPassword } from '@/core/utils'

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

		const tokens = this.tokenService.generateTokens(candidate)
		await this.tokenService.saveToken(tokens.refreshToken, candidate.id)
		return {
			tokens,
			profile: new ProfileDto(candidate)
		}
	}

	async registration(dto: RegistrationDto) {
		const candidate = await this.userService.byEmail(dto.email)
		if (candidate) throw new BadRequestException('Пользователь с таким email уже существует')
		await this.checkPhone(dto.phone)
		const hashPassword = await this.hashService.hash(dto.password)
		const user = await this.userService.create({
			...dto,
			password: hashPassword
		})

		await this.mailService.sendActiveLink(user.email, user.link)
		const tokens = this.tokenService.generateTokens(user)
		await this.tokenService.saveToken(tokens.refreshToken, user.id)
		return {
			tokens,
			profile: new ProfileDto(user)
		}
	}

	async checkPhone(phone: string) {
		const user = await this.userService.byPhone(phone)
		if (user) throw new BadRequestException('Пользователь с таким телефоном уже существует')
		return true
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

	async generateCodeForReset(email: string) {
		const code = generateRandomCode()
		await this.userService.setCode(email, code)
		await this.mailService.sendCodeForResetPassword(email, code)
		return { email }
	}

	async codeConfirmation({ email, code }: CodeDto) {
		const user = await this.userService.checkCode(email, code)
		const randomPassword = generateRandomPassword()
		await this.mailService.sendNewRandomPassword(email, randomPassword)
		const hashPassword = await this.hashService.hash(randomPassword)
		await this.userService.changePassword(user.id, hashPassword)
	}

	async changePassword(dto: ChangePasswordDto, userId: number) {
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
