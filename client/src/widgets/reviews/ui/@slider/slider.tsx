import type { TGetReviewsDto } from '@/entities/review'
import { Slider, SliderProvider } from '@/shared'
import { ReviewsSlide } from '../@slide'
import { ReviewsSlideSkeleton } from '../@slide-skeleton'

export const ReviewsSlider = ({ list }: { list: TGetReviewsDto['items'] }) => {
	if (!list) {
		return <></>
	}

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
				{list.map((i, index) =>
					i ? (
						<ReviewsSlide {...i} key={String(i.id)} />
					) : (
						<ReviewsSlideSkeleton key={String(index)} />
					)
				)}
			</Slider>
		</SliderProvider>
	)
}
