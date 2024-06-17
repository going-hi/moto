import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from '@/configs'
import { DataBaseService } from './database.service'

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig
		})
	],
	providers: [DataBaseService],
	exports: [DataBaseService]
})
export class DatabaseModule {}
