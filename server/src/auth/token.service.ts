import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SessionEntity } from './entities'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { JwtPayload } from './dto'

@Injectable()
export class TokenService {
	constructor(
		@InjectRepository(SessionEntity)
		private readonly sessionRepository: Repository<SessionEntity>,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService
	) {}

	generateTokens({ id, email, name, role, isConfirm }: JwtPayload) {
		const payload = { id, email, name, role, isConfirm }

		const accessToken = this.jwtService.sign(payload, {
			secret: this.configService.get('ACCESS_JWT_SECRET'),
			expiresIn: '30m'
		})
		const refreshToken = this.jwtService.sign(payload, {
			secret: this.configService.get('REFRESH_JWT_SECRET'),
			expiresIn: '60d'
		})

		return { accessToken, refreshToken }
	}

	async saveToken(token: string, userId: number) {
		const oldSession = await this.sessionRepository.findOne({ where: { user: { id: userId } } })

		if (oldSession) {
			return this.sessionRepository.save({
				...oldSession,
				token
			})
		}

		return this.sessionRepository.save({ token, user: { id: userId } })
	}

	async findToken(token: string) {
		return await this.sessionRepository.findOne({ where: { token } })
	}

	async byToken(token: string) {
		return await this.sessionRepository.findOne({ where: { token } })
	}

	async removeTokenFromDb(refresh: string) {
		return await this.sessionRepository.delete({ token: refresh })
	}
}
