import { Slider, reviews } from '@/shared'

import { ReviewsSlide } from '../@slide'

export const ReviewsSlider = () => {
	return (
		<Slider
			options={{
				loop: true,
				containScroll: 'keepSnaps',
				align: 'start',
				watchDrag: false
			}}
		>
			{reviews.map((i, index) => (
				<ReviewsSlide index={index} {...i} key={String(i.id)} />
			))}
		</Slider>
	)
}
