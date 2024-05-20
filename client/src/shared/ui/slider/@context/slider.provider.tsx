import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { type ReactNode } from 'react'
import { SliderContext } from './slider.context'

export const SliderProvider = ({
	children,
	options,
	plugins
}: {
	children: ReactNode
	options: EmblaOptionsType
	plugins?: EmblaPluginType[]
}) => {
	const [sliderRef, sliderApi] = useEmblaCarousel(options, plugins)

	return (
		<SliderContext.Provider value={{ sliderApi, sliderRef }}>
			{children}
		</SliderContext.Provider>
	)
}
