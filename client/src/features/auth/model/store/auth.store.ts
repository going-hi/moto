import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TAuthStore = {
	accessToken: string | null
	setAccessToken: (t: string) => void
}

export const useAuthStore = create<TAuthStore>()(
	immer(set => ({
		accessToken: null,
		setAccessToken: token =>
			set(state => {
				state.accessToken = token
			})
	}))
)
