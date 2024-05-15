import { CreateUserDto } from '@/modules/user/dto'
import { PickType } from '@nestjs/swagger'
import { PasswordValidation } from '../decorators'

export class ChangePasswordDto extends PickType(CreateUserDto, ['password']) {
	@PasswordValidation
	newPassword: string
}
