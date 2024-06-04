import { $api, ZodParseError } from '@/shared'
import { AuthDtoSchema, TAuthDto, TRegistrationDto } from '../model'

export const registration = (body: TRegistrationDto) =>
	$api
		.post('/auth/registration', body)
		.then(res =>
			new ZodParseError<TAuthDto>(AuthDtoSchema, res.data).result()
		)
