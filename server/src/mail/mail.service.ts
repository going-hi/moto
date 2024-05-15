import { MailerService } from '@nestjs-modules/mailer'
import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class MailService {
	constructor(
		private readonly mailerService: MailerService,
		private readonly logger: Logger,
		private readonly configService: ConfigService
	) {}

	async sendActiveLink(to: string, link: string) {
		try {
			await this.mailerService.sendMail({
				to,
				subject: 'Подтверждение почты',
				text: '',
				html: `
                    <div>
                    <h1>Ваша ссылка активации</h1>
                    <h1>${link}</h1>
                    </div>
                `
			})
		} catch (e) {
			this.logger.error(e.message)
		}
	}
}
