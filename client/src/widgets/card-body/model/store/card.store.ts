import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { TGetCardDto } from '../types'

type TCardStore = {
	data: TGetCardDto | null
	setData: (d: TGetCardDto | null) => void
	isLoading: boolean
	setIsLoading: (l: boolean) => void
}

export const useCardStore = create<TCardStore>()(
	immer(set => ({
		data: null,
		setData: data =>
			set(state => {
				state.data = data
			}),
		isLoading: false,
		setIsLoading: loading =>
			set(state => {
				state.isLoading = loading
			})
	}))
)
