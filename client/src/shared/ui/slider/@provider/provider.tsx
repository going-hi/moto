import type { EmblaCarouselType } from 'embla-carousel'
import { ReactNode, useState, useCallback } from 'react'
import { scrollToSlide } from '@/shared'
import { SliderContext } from '../@model'

export const SliderProvider = ({
	children,
	api
}: {
	children: ReactNode
	api?: EmblaCarouselType
}) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const onClick = useCallback(
		(index: number) => {
			if (!api) return

			if (index !== activeIndex) {
				scrollToSlide({
					api,
					index,
					jump: false,
					direction: -1
				})

				setActiveIndex(index)
			}
		},
		[activeIndex, api]
	)

	return (
		<SliderContext.Provider value={{ activeIndex, onClick }}>
			{children}
		</SliderContext.Provider>
	)
}
