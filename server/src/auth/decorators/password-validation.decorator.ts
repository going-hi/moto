import { applyDecorators } from '@nestjs/common'
import { IsString, MaxLength, MinLength } from 'class-validator'

export const PasswordValidation = applyDecorators(
	IsString({ message: 'Пароль должен быть строкой' }),
	MinLength(8, { message: 'Минимальная длина пароля 8 символов' }),
	MaxLength(32, { message: 'Максимальная длина пароля 32 символов' })
)
