import { isSupported, share } from 'shared-zustand'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { TProfile } from '../types'

type TProfileStore = {
	profile: TProfile | null
	setData: (d: { profile: TProfile; accessToken: string }) => void
	accessToken: string | null
	logout: () => void
	setProfile: (p: TProfile) => void
}

const useProfileStore = create<TProfileStore>()(
	subscribeWithSelector(
		immer(set => ({
			profile: null,
			accessToken: null,
			setData: ({ accessToken, profile }) =>
				set(state => {
					state.profile = profile
					state.accessToken = accessToken
				}),
			logout: () =>
				set(state => {
					state.accessToken = null
					state.profile = null
				}),
			setProfile: profile =>
				set(state => {
					state.profile = profile
				})
		}))
	)
)

if (isSupported()) {
	share('accessToken', useProfileStore)
	share('profile', useProfileStore)
}

export { useProfileStore }
