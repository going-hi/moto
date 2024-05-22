import { $api } from '@/shared'
import type { TLogin } from '../model'

export const login = (body: TLogin) => {
	return $api.post('/auth/login', body)
}
