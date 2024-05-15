import { Slider } from '@/shared'
import { popularCardsArr } from '../../model'
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
			{popularCardsArr.map((i, index, id) => (
				<PopularSlide {...i} key={String(id)} index={index} />
			))}
		</Slider>
	)
}
