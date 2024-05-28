import { $api } from '@/shared'
import type { TResetCodeDto } from '../model'

export const resetCode = (body: TResetCodeDto) =>
	$api.post('/auth/password/reset/code', body)
