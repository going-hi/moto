import { Logger, Module } from '@nestjs/common'
import { MailService } from './mail.service'
import { MailerModule } from '@nestjs-modules/mailer'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getMailConfig } from '@/configs'

@Module({
	imports: [
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMailConfig
		})
	],
	providers: [MailService, Logger],
	exports: [MailService]
})
export class MailModule {}
