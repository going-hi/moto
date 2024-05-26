import { CreateUserDto } from './create-user.dto'
import { OmitType } from '@nestjs/swagger'

export class UpdateUserDto extends OmitType(CreateUserDto, ['password', 'email']) {}
