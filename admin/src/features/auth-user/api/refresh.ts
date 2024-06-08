import { $api } from '@/shared'
import { AuthDtoSchema } from '../model'

export const refresh = () =>
	$api.get('/auth/refresh').then(res => AuthDtoSchema.parse(res.data))
