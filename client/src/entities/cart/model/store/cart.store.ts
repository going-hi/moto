import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { TGetCartDto } from '../types'

type TBasketStore<> = {
	data: TGetCartDto
	setData: (data: TGetCartDto) => void
	isLoading: boolean
	setIsLoading: (l: boolean) => void
}

export const useCartStore = create<TBasketStore>()(
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
