import { share, isSupported } from 'shared-zustand'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type TAuthStore = {
	accessToken: string | null
	setAccessToken: (t: string | null) => void
}

const useAuthStore = create<TAuthStore>()(
	subscribeWithSelector(
		immer(set => ({
			accessToken: null,
			setAccessToken: token =>
				set(state => {
					state.accessToken = token
				})
		}))
	)
)

if (isSupported()) {
	share('accessToken', useAuthStore)
}

export { useAuthStore }
