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
		const API_URL = this.configService.get('API_URL')
		const PORT = this.configService.get('SERVER_PORT')
		try {
			await this.mailerService.sendMail({
				to,
				from: this.configService.get('SMTP_USER'),
				subject: 'Подтверждение почты',
				text: '',
				html: `
                    <div>
                    <h1>Ваша ссылка активации для онлайн магазина Moto</h1>
					<a href="${API_URL}:${PORT}/api/auth/active/${link}">Нажмите на это ссылку, чтобы подтвердить почту</a>
                    </div>
                `
			})
		} catch (e) {
			this.logger.error(e.message)
		}
	}

	async sendCodeForResetPassword(to: string, code: number) {
		try {
			await this.mailerService.sendMail({
				to,
				from: this.configService.get('SMTP_USER'),
				subject: 'Подтверждение почты',
				text: '',
				html: `
                    <div>
                    <h1>Ваша код подтверждения для онлайн магазина Moto</h1>
					<h1>${code}</h1>
                    </div>
                `
			})
		} catch (e) {
			this.logger.error(e.message)
		}
	}

	async sendNewRandomPassword(to: string, password: string) {
		try {
			await this.mailerService.sendMail({
				to,
				from: this.configService.get('SMTP_USER'),
				subject: 'Подтверждение почты',
				text: '',
				html: `
                    <div>
                    <h1>Ваш новый пароль от онлайн магазина Moto, после входа в систему обязательно смените его</h1>
					<h1>${password}</h1>
                    </div>
                `
			})
		} catch (e) {
			this.logger.error(e.message)
		}
	}
}
