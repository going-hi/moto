import { Slider, reviews, SliderProvider } from '@/shared'

import { ReviewsSlide } from '../@slide'

export const ReviewsSlider = () => {
	return (
		<SliderProvider
			options={{
				loop: true,
				containScroll: 'keepSnaps',
				align: 'start',
				watchDrag: false
			}}
		>
			<Slider type='more'>
				{reviews.map(i => (
					<ReviewsSlide {...i} key={String(i.id)} />
				))}
			</Slider>
		</SliderProvider>
	)
}
