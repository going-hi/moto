import { Slider, cards } from '@/shared'
import { PopularSlide } from '../@slide'

export const PopularSlider = () => {
	return (
		<Slider
			options={{
				loop: true,
				containScroll: 'keepSnaps',
				align: 'start',
				watchDrag: false
			}}
			length={cards.length}
		>
			{cards.map((i, index) => (
				<PopularSlide {...i} key={String(i.id)} index={index} />
			))}
		</Slider>
	)
}
