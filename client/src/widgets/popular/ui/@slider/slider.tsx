import useEmblaCarousel from 'embla-carousel-react'
import { useRef, useState } from 'react'
import { popularCardsArr } from '../@model'
import { PopularSlide } from '../@slide/slide'

export const PopularSlider = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

	const [popularSliderRef, popularSliderApi] = useEmblaCarousel({
		loop: true,
		containScroll: 'keepSnaps',
		align: 'start',
		watchDrag: false
	})

	const isManualChangeSlide = useRef<boolean>(false)

	const onSlideClick = (index: number) => {
		if (!popularSliderApi) return

		if (index !== activeSlideIndex) {
			setActiveSlideIndex(index)
		}
	}

	return (
		<div ref={popularSliderRef} className='overflow-hidden'>
			<div className='flex'>
				{popularCardsArr.map((i, index) => (
					<PopularSlide
						onClick={onSlideClick}
						{...i}
						key={i.image}
						index={index}
						isActive={index === activeSlideIndex}
					/>
				))}
			</div>
		</div>
	)
}
