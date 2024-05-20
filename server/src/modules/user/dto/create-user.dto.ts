import { PasswordValidation } from '@/auth/decorators'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
	@ApiProperty()
	@IsEmail({}, { message: 'Некорректный email' })
	email: string

	@ApiProperty()
	@PasswordValidation
	password: string

	@ApiProperty()
	@IsString({ message: 'Имя должно быть строкой' })
	@MinLength(2, { message: 'Минимальная длина имени 2 символов' })
	@MaxLength(32, { message: 'Максимальная длина имени 32 символов' })
	name: string

	@ApiProperty()
	@IsString({ message: 'Фамилия должна быть строкой' })
	@MinLength(2, { message: 'Минимальная длина фамилии 2 символов' })
	@MaxLength(32, { message: 'Максимальная длина фамилии 32 символов' })
	surname: string
}
