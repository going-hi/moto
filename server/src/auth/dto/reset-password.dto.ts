import { CreateUserDto } from '@/modules/user/dto'
import { PickType } from '@nestjs/swagger'

export class ResetPasswordDto extends PickType(CreateUserDto, ['email']) {}
