import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from '@/configs'
import { DatabaseModule } from '@/core/database/database.module'
import { AuthModule } from '@/auth/auth.module'
import { MailModule } from '@/mail/mail.module'

@Module({
	imports: [ConfigModule.forRoot(EnvConfigOptions), DatabaseModule, AuthModule, MailModule]
})
export class AppModule {}
