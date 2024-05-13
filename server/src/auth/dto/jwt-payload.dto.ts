import { UserEntity } from '@/modules/user/entities'
import { PickType } from '@nestjs/swagger'

export class JwtPayload extends PickType(UserEntity, ['email', 'id', 'name', 'role']) {}
