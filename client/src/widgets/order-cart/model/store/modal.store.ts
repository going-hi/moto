import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TOrderCartModalStore = {
	isShow: boolean
	setIsShow: (s: boolean) => void
}

export const useOrderCartModalStore = create<TOrderCartModalStore>()(
	immer(set => ({
		isShow: false,
		setIsShow: isShow =>
			set(state => {
				state.isShow = isShow
			})
	}))
)
