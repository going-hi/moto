import { Slider, SliderProvider, cards } from '@/shared'
import { PopularSlide } from '../@slide'

export const PopularSlider = () => {
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
				{cards.map((i, index) => (
					<PopularSlide {...i} key={String(i.id)} index={index} />
				))}
			</Slider>
		</SliderProvider>
	)
}
