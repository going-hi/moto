import { $api } from '@/shared'
import { TResetCodeDto } from '../model'
export const resetCode = (body: TResetCodeDto) =>
	$api.post('/auth/password/reset/code', body)
