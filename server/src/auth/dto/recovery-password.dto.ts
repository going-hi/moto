import { PickType } from '@nestjs/swagger'
import { LoginDto } from './login.dto'

export class RecoveryPasswordDto extends PickType(LoginDto, ['email']) {}
