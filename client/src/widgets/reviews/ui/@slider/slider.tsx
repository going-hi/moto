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
			length={reviews.length}
		>
			{reviews.map(i => (
				<ReviewsSlide {...i} key={String(i.id)} />
			))}
		</Slider>
	)
}
