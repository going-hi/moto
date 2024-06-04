import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { TCreateOrderDto } from '../types'

type TOrderCartModalStore = {
	data: null | TCreateOrderDto
	setData: (d: TCreateOrderDto) => void
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
