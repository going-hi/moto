import type { AuthProvider } from 'react-admin'
import { useAuthStore } from '../../model'
import { login, refresh } from '../../api'
import { errorHandler } from '@/shared'

export const authProvider: AuthProvider = {
	login: async ({
		username,
		password
	}: {
		username: string
		password: string
	}) => {
		try {
			const data = await login({ email: username, password })

			if (!data) {
				return Promise.reject()
			}

			if (data.profile.role !== 'user') {
				useAuthStore.getState().setData(data)
				return Promise.resolve()
			}

			return Promise.reject()
		} catch (e) {
			return errorHandler(e)
		}
	},
	logout: async () => {},
	checkAuth: async () => {
		const { accessToken } = useAuthStore.getState()

		if (!accessToken) {
			const data = await refresh()

			if (!data) {
				return Promise.reject({
					message: false
				})
			}

			if (data.profile.role === 'user') {
				return Promise.reject({
					message: false
				})
			}

			useAuthStore.getState().setData(data)
		}

		return Promise.resolve()
	},
	checkError: () => {
		return Promise.resolve()
	},
	getPermissions: () => {
		return Promise.resolve()
	},
	getIdentity: () => {
		const { profile } = useAuthStore.getState()

		if (!profile) {
			return Promise.reject()
		}

		console.log(profile)

		return Promise.resolve({
			id: 'user',
			fullName: profile.name
		})
	}
}
