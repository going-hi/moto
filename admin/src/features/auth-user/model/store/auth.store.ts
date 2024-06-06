import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'

type TAuthStore = {
	accessToken: string | null
	setAccessToken: (t: string) => void
	logout: () => void
}

export const useAuthStore = create<TAuthStore>()(
	immer(set => ({
		accessToken: null,
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
