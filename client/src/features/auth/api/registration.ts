import { $api } from '@/shared'
import { AuthDtoSchema, TRegistrationDto } from '../model'

export const registration = (body: TRegistrationDto) =>
	$api
		.post('/auth/registration', body)
		.then(res => AuthDtoSchema.parse(res.data))
