import axios from 'axios'
import { ZodError } from 'zod'
import { $api, envConfig } from '@/shared'
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

			return AuthDtoSchema.parse(res.data)
		} catch (e) {
			if (e instanceof ZodError) {
				console.log('Zod parse error')
			}
			return null
		}
	}

	return $api.get('/auth/refresh').then(res => AuthDtoSchema.parse(res.data))
}
