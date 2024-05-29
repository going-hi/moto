import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { TCard } from '@/entities/card'

type TBasketStore = {
	items: TCard[]
	setItems: (items: TCard[]) => void
}

export const useBasketStore = create<TBasketStore>()(
	immer(set => ({
		items: [],
		setItems: items =>
			set(state => {
				state.items = items
			})
	}))
)
