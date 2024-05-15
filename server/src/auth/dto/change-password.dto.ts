import { CreateUserDto } from '@/modules/user/dto'
import { PickType } from '@nestjs/swagger'
import { IsString, MaxLength, MinLength } from 'class-validator'

export class ChangePasswordDto extends PickType(CreateUserDto, ['password']) {
	@IsString()
	@MinLength(8)
	@MaxLength(32)
	newPassword: string
}
