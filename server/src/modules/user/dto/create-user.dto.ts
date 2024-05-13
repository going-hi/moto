import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(8)
	@MaxLength(32)
	password: string

	@MinLength(2)
	@MaxLength(32)
	@IsString()
	name: string

	@MinLength(2)
	@MaxLength(32)
	@IsString()
	surname: string
}
