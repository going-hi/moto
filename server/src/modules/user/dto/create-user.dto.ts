import { PasswordValidation } from '@/auth/decorators'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
	@IsEmail({}, { message: 'Некорректный email' })
	email: string

	@PasswordValidation
	password: string

	@IsString({ message: 'Имя должно быть строкой' })
	@MinLength(2, { message: 'Минимальная длина имени 2 символов' })
	@MaxLength(32, { message: 'Максимальная длина имени 32 символов' })
	name: string

	@IsString({ message: 'Фамилия должна быть строкой' })
	@MinLength(2, { message: 'Минимальная длина фамилии 2 символов' })
	@MaxLength(32, { message: 'Максимальная длина фамилии 32 символов' })
	surname: string
}
