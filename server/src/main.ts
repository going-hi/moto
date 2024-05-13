import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.use(cookieParser())
	app.setGlobalPrefix('api')

	const configService = app.get(ConfigService)
	const PORT = configService.get('PORT')
	const CLIENT_URL = configService.get('CLIENT_URL')

	app.enableCors({
		origin: CLIENT_URL,
		credentials: true
	})

	const logger = new Logger()
	await app.listen(PORT)
	logger.log(`Server started on port: ${PORT}`)
}
bootstrap()
