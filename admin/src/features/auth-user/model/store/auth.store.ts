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
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoic2VsZXplbmZvcndvcmsxMUBnbWFpbC5jb20iLCJuYW1lIjoiUGF1bCIsInJvbGUiOiJhZG1pbiIsImlzQ29uZmlybSI6dHJ1ZSwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MTc4MDY1NDksImV4cCI6MTcxNzgwODM0OX0.IN7wl1NBlJL08_WHZVepEm6cIg3FA_hLqZ4gfLm70X4',
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
