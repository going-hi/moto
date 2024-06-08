import { $api } from '@/shared'
import { AuthDtoSchema } from '../model'

export const login = (body: { email: string; password: string }) =>
	$api.post('/auth/login', body).then(res => AuthDtoSchema.parse(res.data))
