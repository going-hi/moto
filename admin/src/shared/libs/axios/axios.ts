import axios, { type AxiosError } from 'axios'
import { axiosConfig } from '../../config'
import { refresh, useAuthStore } from '@/features/auth-user'

const $api = axios.create(axiosConfig)

$api.interceptors.request.use(req => {
	req.headers.authorization = 'Bearer ' + useAuthStore.getState().accessToken
	req.headers['Content-Type'] = 'application/json'

	return req
})

$api.interceptors.response.use(
	res => res,
	async (err: AxiosError & { config: { _isRetry: boolean } }) => {
		const origin = err.config

		if (err.response && err.response.status == 401 && !origin._isRetry) {
			origin._isRetry = true

			const refreshResult = await refresh()

			if (!refreshResult) {
				useAuthStore.getState().logout()
				return
			}

			useAuthStore.getState().setData(refreshResult)

			return $api(origin)
		}
		throw err
	}
)

export { $api }
