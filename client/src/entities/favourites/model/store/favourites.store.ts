import { share, isSupported } from 'shared-zustand'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { TGetFavouritesDto } from '../types'

type TFavouritesStore = {
	data: TGetFavouritesDto
	setData: (d: TGetFavouritesDto) => void
	isLoading: boolean
	setIsLoading: (l: boolean) => void
}

const useFavouritesStore = create<TFavouritesStore>()(
	subscribeWithSelector(
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
)

if (isSupported()) {
	share('data', useFavouritesStore)
	share('isLoading', useFavouritesStore)
}

export { useFavouritesStore }
