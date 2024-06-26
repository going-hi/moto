import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { HashModule } from '@/core/hash/hash.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SessionEntity } from './entities'
import { UserModule } from '@/modules/user/user.module'
import { TokenService } from './token.service'
import { JwtModule } from '@nestjs/jwt'
import { AccessJwtStrategy, RefreshJwtStrategy } from './strategies'
import { MailModule } from '@/mail/mail.module'

@Module({
	imports: [
		TypeOrmModule.forFeature([SessionEntity]),
		HashModule,
		UserModule,
		JwtModule.register({}),
		MailModule
	],
	controllers: [AuthController],
	providers: [AuthService, TokenService, AccessJwtStrategy, RefreshJwtStrategy],
	exports: [TokenService]
})
export class AuthModule {}
