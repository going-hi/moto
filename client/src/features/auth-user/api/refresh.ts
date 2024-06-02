import axios from 'axios'
import { $api, ZodParseError, envConfig } from '@/shared'
import { TAuthDto, AuthDtoSchema } from '../model'

export const refresh = async (
	isInterceptor?: boolean
): Promise<TAuthDto | null> => {
	if (isInterceptor === false) {
		try {
			const res = await axios.get(
				envConfig.getValue('VITE_API_URL') + 'auth/refresh',
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)

			return new ZodParseError<TAuthDto>(AuthDtoSchema, res.data).result()
		} catch (e) {
			return null
		}
	}

	return $api
		.get('/auth/refresh')
		.then(res =>
			new ZodParseError<TAuthDto>(AuthDtoSchema, res.data).result()
		)
}
