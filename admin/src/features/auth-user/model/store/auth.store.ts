import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import type { TProfile } from '../types'

type TAuthStore = {
	accessToken: string | null
	setData: (t: { accessToken: string; profile: TProfile }) => void
	logout: () => void
	profile: TProfile | null
}

export const useAuthStore = create<TAuthStore>()(
	immer(set => ({
		accessToken: null,
		profile: null,
		setData: ({ accessToken, profile }) =>
			set(state => {
				state.accessToken = accessToken
				state.profile = profile
			}),
		logout: () =>
			set(state => {
				state.accessToken = null
				state.profile = null
			})
	}))
)
