import { DocumentBuilder } from '@nestjs/swagger'

export const swaggerConfig = new DocumentBuilder()
	.setTitle('Moto')
	.setDescription('')
	.setVersion('1.0.0')
	.addBearerAuth(
		{
			type: 'http',
			scheme: 'bearer'
		},
		'access-token'
	)
	.build()
