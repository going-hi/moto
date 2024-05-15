import { Slider } from '@/shared'
import { reviewItemsArr } from '../../model'
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
			{reviewItemsArr.map((i, index) => (
				<ReviewsSlide index={index} {...i} key={String(i.id)} />
			))}
		</Slider>
	)
}
