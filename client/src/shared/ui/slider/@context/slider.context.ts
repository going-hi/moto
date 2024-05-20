import { type EmblaCarouselType } from 'embla-carousel'
import { UseEmblaCarouselType } from 'embla-carousel-react'
import { createContext, useContext } from 'react'

type TSliderContext = {
	sliderApi?: EmblaCarouselType
	sliderRef?: UseEmblaCarouselType[0]
}

export const SliderContext = createContext<TSliderContext>({
	sliderApi: undefined,
	sliderRef: undefined
})

export const useSlider = () => useContext<TSliderContext>(SliderContext)
