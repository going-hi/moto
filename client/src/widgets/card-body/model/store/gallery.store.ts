import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TCardGalleryStore = {
	activeIndex: number
	setActiveIndex: (i: number) => void
}

export const useCardGalleryStore = create<TCardGalleryStore>()(
	immer(set => ({
		activeIndex: 0,
		setActiveIndex: (i: number) =>
			set(state => {
				state.activeIndex = i
			})
	}))
)
