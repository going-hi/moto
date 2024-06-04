import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TModalData = {
	id: number
}

type TOrderCartModalStore = {
	data: null | TModalData
	setData: (d: TModalData) => void
	close: () => void
}

export const useOrderCartModalStore = create<TOrderCartModalStore>()(
	immer(set => ({
		data: null,
		setData: data =>
			set(state => {
				state.data = data
			}),
		close: () =>
			set(state => {
				state.data = null
			})
	}))
)
