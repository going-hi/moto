import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export const RefreshGuard = () => UseGuards(AuthGuard('REFRESH_JWT_STRATEGY'))
