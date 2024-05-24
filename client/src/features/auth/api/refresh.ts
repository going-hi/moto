import axios from 'axios'
import { $api, envConfig } from '@/shared'
import { TRefreshDto, RefreshDtoSchema } from '../model'

export const refresh = async (
	isInterceptor?: boolean
): Promise<TRefreshDto | null> => {
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

			return RefreshDtoSchema.parse(res.data)
		} catch (e) {
			console.log(e)
			return null
		}
	}

	return $api
		.get('/auth/refresh')
		.then(res => RefreshDtoSchema.parse(res.data))
}
