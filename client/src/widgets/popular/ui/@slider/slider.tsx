import clsx from 'clsx'
import type { TCardsDto } from '@/entities/card'
import { Slider, SliderProvider } from '@/shared'
import { PopularSlide } from '../@slide'
import { PopularSlideSkeleton } from '../@slide-skeleton'

export const PopularSlider = ({
	list,
	isLoading
}: {
	list: TCardsDto['items']
	isLoading: boolean
}) => {
	return (
		<SliderProvider
			options={{
				loop: true,
				containScroll: 'keepSnaps',
				align: 'start',
				watchDrag: false
			}}
		>
			<Slider
				type='more'
				classNameBody={clsx(isLoading && 'gap-x-[50px]')}
			>
				{list.map((i, index) =>
					i ? (
						<PopularSlide {...i} key={String(i.id)} index={index} />
					) : (
						<PopularSlideSkeleton key={String(index)} />
					)
				)}
			</Slider>
		</SliderProvider>
	)
}
