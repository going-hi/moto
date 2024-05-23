import type { CreateAxiosDefaults } from 'axios'
import { envConfig } from './env.config'

export const axiosConfig: CreateAxiosDefaults = {
	baseURL: envConfig.getValue('VITE_API_URL'),
	withCredentials: true
}
