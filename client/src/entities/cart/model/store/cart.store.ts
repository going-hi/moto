import { share, isSupported } from 'shared-zustand'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { TGetCartDto } from '../types'

type TBasketStore<> = {
	data: TGetCartDto
	setData: (data: TGetCartDto) => void
	isLoading: boolean
	setIsLoading: (l: boolean) => void
}

const useCartStore = create<TBasketStore>()(
	subscribeWithSelector(
		immer(set => ({
			data: {
				items: [],
				meta: {
					total: 0,
					totalPrice: 0
				}
			},
			setData: data =>
				set(state => {
					state.data = data
				}),
			isLoading: false,
			setIsLoading: (isLoading: boolean) =>
				set(state => {
					state.isLoading = isLoading
				})
		}))
	)
)

if (isSupported()) {
	share('data', useCartStore)
	share('isLoading', useCartStore)
}

export { useCartStore }
