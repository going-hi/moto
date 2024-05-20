import { CreateUserDto } from '@/modules/user/dto'
import { ApiProperty, PickType } from '@nestjs/swagger'
import { PasswordValidation } from '../decorators'

export class ChangePasswordDto extends PickType(CreateUserDto, ['password']) {
	@ApiProperty()
	@PasswordValidation
	newPassword: string
}
