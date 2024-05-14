import useEmblaCarousel from 'embla-carousel-react'
import { useState } from 'react'
import { scrollToSlide, Button } from '@/shared'
import { popularCardsArr } from '../@model'
import { PopularSlide } from '../@slide'

export const PopularSlider = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

	const [popularSliderRef, popularSliderApi] = useEmblaCarousel({
		loop: true,
		containScroll: 'keepSnaps',
		align: 'start',
		watchDrag: false
	})

	const onSlideClick = (index: number) => {
		if (!popularSliderApi) return

		if (index !== activeSlideIndex) {
			scrollToSlide({
				api: popularSliderApi,
				index,
				jump: false,
				direction: -1
			})

			setActiveSlideIndex(index)
		}
	}

	return (
		<div className='relative'>
			<div ref={popularSliderRef} className='overflow-hidden '>
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
			<Button variant='more' path='/catalog' />
		</div>
	)
}
