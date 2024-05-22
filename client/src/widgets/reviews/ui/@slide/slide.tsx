import { TReview } from '@/entities/review'
import { Review } from '@/entities/review'
import { Slide } from '@/shared'

export const ReviewsSlide = (card: TReview) => {
	return (
		<Slide className='basis-[718px] p-[6px] pr-[50px]'>
			<Review {...card} />
		</Slide>
	)
}
