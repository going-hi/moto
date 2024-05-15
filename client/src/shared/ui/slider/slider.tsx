import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { type ReactNode } from 'react'
import { Button } from '@/shared'
import { SliderProvider } from './@provider'

export const Slider = ({
	children,
	options,
	plugins = [],
	more
}: {
	children: ReactNode
	options: EmblaOptionsType
	plugins?: EmblaPluginType[]
	more?: string
}) => {
	const [sliderRef, sliderApi] = useEmblaCarousel(options, plugins)

	return (
		<SliderProvider api={sliderApi}>
			<div className='relative'>
				<div ref={sliderRef} className='overflow-hidden '>
					<div className='flex'>{children}</div>
				</div>
				{!!more && <Button variant='more' path={more} />}
			</div>
		</SliderProvider>
	)
}
