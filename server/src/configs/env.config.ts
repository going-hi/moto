import { envValidate } from '@/core/utils'
import { ENodeEnv } from '@/common/enums'
import { ConfigModuleOptions } from '@nestjs/config'
import { Type } from 'class-transformer'
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString } from 'class-validator'

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

	@IsOptional()
	@IsBoolean()
	POSTGRES_SSL: boolean = false

	// * Jwt
	@IsString()
	ACCESS_JWT_SECRET: string

	@IsString()
	REFRESH_JWT_SECRET: string

	// * mail
	@IsString()
	SMTP_HOST: string

	@IsString()
	SMTP_USER: string

	@Type(() => Number)
	@IsInt()
	SMTP_PORT: number

	@IsString()
	SMTP_PASSWORD: string

	@IsOptional()
	@IsEnum(ENodeEnv)
	NODE_ENV: ENodeEnv
}

export const EnvConfigOptions: ConfigModuleOptions = {
	validate: envValidate(EnvironmentVariables),
	isGlobal: true
}
