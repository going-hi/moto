import { $api } from '@/shared'
import { TResetCodeDto } from '../../auth/model'
export const resetCode = (body: TResetCodeDto) =>
	$api.post('/auth/password/reset/code', body)
