import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { TGetFavouritesDto } from '../types'

type TFavouritesStore = {
	data: TGetFavouritesDto
	setData: (d: TGetFavouritesDto) => void
	isLoading: boolean
	setIsLoading: (l: boolean) => void
}

export const useFavouritesStore = create<TFavouritesStore>()(
	immer(set => ({
		data: {
			items: [],
			meta: {
				total: 0
			}
		},
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
