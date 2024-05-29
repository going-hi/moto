import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { TCardCart } from '../types'

type TBasketStore = {
	items: TCardCart[]
	setData: (data: { items: TCardCart[]; total: number }) => void
	total: number
}

export const useCartStore = create<TBasketStore>()(
	immer(set => ({
		items: [],
		total: 0,
		setData: ({ items, total }) =>
			set(state => {
				state.items = items
				state.total = total
			})
	}))
)
