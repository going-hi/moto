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
		>
			{cards.map((i, index, id) => (
				<PopularSlide {...i} key={String(id)} index={index} />
			))}
		</Slider>
	)
}
