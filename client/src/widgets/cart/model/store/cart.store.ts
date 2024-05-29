import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { TCard } from '@/entities/card'

type TBasketStore = {
	items: TCard[]
	setData: (data: { items: TCard[]; total: number }) => void
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
