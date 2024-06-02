import { $api, ZodParseError } from '@/shared'
import { AuthDtoSchema, TAuthDto, type TLogin } from '../model'

export const login = (body: TLogin) =>
	$api
		.post('/auth/login', body)
		.then(res =>
			new ZodParseError<TAuthDto>(AuthDtoSchema, res.data).result()
		)
