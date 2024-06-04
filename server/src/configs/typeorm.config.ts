import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
	type: 'postgres',
	host: configService.get('POSTGRES_HOST'),
	username: configService.get('POSTGRES_USER'),
	password: configService.get('POSTGRES_PASSWORD'),
	database: configService.get('POSTGRES_DATABASE'),
	port: configService.get('POSTGRES_PORT'),
	autoLoadEntities: true,
	synchronize: true,
	ssl: configService.get('POSTGRES_SSL')
})
