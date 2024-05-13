import { envValidate } from '@/core/utils'
import { ConfigModuleOptions } from '@nestjs/config'
import { Type } from 'class-transformer'
import { IsInt, IsString } from 'class-validator'

export class EnvironmentVariables {
	@Type(() => Number)
	@IsInt()
	PORT: number

	// * DataBase
	@IsString()
	POSTGRES_HOST: string

	@Type(() => Number)
	@IsInt()
	POSTGRES_PORT: number

	@IsString()
	POSTGRES_USER: string

	@IsString()
	POSTGRES_PASSWORD: string

	@IsString()
	POSTGRES_DATABASE: string

	// * Jwt
	@IsString()
	ACCESS_JWT_SECRET: string

	@IsString()
	REFRESH_JWT_SECRET: string
}

export const EnvConfigOptions: ConfigModuleOptions = {
	validate: envValidate(EnvironmentVariables),
	isGlobal: true
}
