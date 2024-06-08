import { AuthDtoSchema } from '../model'
import { envConfig } from '@/shared'
import axios from 'axios'

export const refresh = () =>
	axios
		.get(`${envConfig.getValue('VITE_API_URL')}auth/refresh`, {
			withCredentials: true
		})
		.then(res => AuthDtoSchema.parse(res.data))
