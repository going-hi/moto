import { createContext, useContext } from 'react'

export type TSliderContext = {
	onClick: (i: number) => void
	activeIndex: number
}

export const SliderContext = createContext<TSliderContext>({
	activeIndex: 0,
	onClick: () => {}
})

export const useSlider = () => useContext<TSliderContext>(SliderContext)
