import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TResetStore = {
	email: string | null
	setEmail: (e: string | null) => void
}

export const useResetStore = create<TResetStore>()(
	immer(set => ({
		email: null,
		setEmail: email =>
			set(state => {
				state.email = email
			})
	}))
)
