import { $api } from '@/shared'
import { AuthDtoSchema, type TLogin } from '../model'

export const login = (body: TLogin) =>
	$api.post('/auth/login', body).then(res => AuthDtoSchema.parse(res.data))
