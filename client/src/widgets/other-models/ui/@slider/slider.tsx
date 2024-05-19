import { Slider, cards } from '@/shared'
import { OtherModelsSlide } from '../@slide'

export const OtherModelsSlider = () => {
	return (
		<Slider type='default' classNameBody='gap-x-[50px] pb-[20px]'>
			{cards.map(i => (
				<OtherModelsSlide {...i} key={String(i.id)} />
			))}
		</Slider>
	)
}
