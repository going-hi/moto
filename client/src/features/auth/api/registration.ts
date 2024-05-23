import { $api } from '@/shared'
import { TRegistration } from '../model'

export const registration = (body: Omit<TRegistration, 'confirmPassword'>) => {
	return $api.post('/auth/registration', body)
}
