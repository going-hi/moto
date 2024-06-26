import axios, { AxiosError } from 'axios'
import { refresh } from '@/features/auth-user'
import { useProfileStore } from '@/entities/profile'
import { axiosConfig } from '../../config'

const $api = axios.create(axiosConfig)

$api.interceptors.request.use(req => {
	req.headers.authorization =
		'Bearer ' + useProfileStore.getState().accessToken
	req.headers['Content-Type'] = 'application/json'

	return req
})

$api.interceptors.response.use(
	res => res,
	async (err: AxiosError & { config: { _isRetry: boolean } }) => {
		const origin = err.config

		if (err.response && err.response.status == 401 && !origin._isRetry) {
			origin._isRetry = true

			const refreshResult = await refresh(false)

			if (!refreshResult) {
				useProfileStore.getState().logout()
				return
			}

			useProfileStore.getState().setData(refreshResult)

			return $api(origin)
		}
		throw err
	}
)

export { $api }
