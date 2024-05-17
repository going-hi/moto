import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { type ReactNode, useCallback, useState } from 'react'
import { Button } from '@/shared'

export const Slider = ({
	children,
	options,
	plugins = [],
	length
}: {
	children: ReactNode
	options: EmblaOptionsType
	plugins?: EmblaPluginType[]
	length: number
}) => {
	const [sliderRef, api] = useEmblaCarousel(options, plugins)
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const onClick = useCallback(() => {
		if (!api) return

		const index = activeIndex + 1 > length ? 1 : activeIndex + 1

		api.scrollTo(index, false)

		setActiveIndex(index)
	}, [activeIndex, api, length])

	return (
		<div className='relative'>
			<div ref={sliderRef} className='overflow-hidden '>
				<div className='flex'>{children}</div>
			</div>
			<Button variant='more' onClick={onClick} />
		</div>
	)
}
