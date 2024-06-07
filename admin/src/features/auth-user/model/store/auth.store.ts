import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'

type TAuthStore = {
	accessToken: string | null
	setAccessToken: (t: string) => void
	logout: () => void
}

export const useAuthStore = create<TAuthStore>()(
	immer(set => ({
		accessToken:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoic2VsZXplbmZvcndvcmsxMUBnbWFpbC5jb20iLCJuYW1lIjoiUGF1bCIsInJvbGUiOiJhZG1pbiIsImlzQ29uZmlybSI6dHJ1ZSwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MTc3OTkwMzMsImV4cCI6MTcxNzgwMDgzM30.obMQprPVj5U9LxYBoRL5IvsF1PCeWs6VNDJDm6mvLfc',
		setAccessToken: token =>
			set(state => {
				state.accessToken = token
			}),
		logout: () =>
			set(state => {
				state.accessToken = null
			})
	}))
)
