import { $api } from '@/shared'
import { TRegistrationDto } from '../model'

export const registration = (body: TRegistrationDto) =>
	$api.post('/auth/registration', body)
