import { TCard } from '@/entities/card'
import { Slider } from '@/shared'
import { CardGalleryItem } from '../@item'

export const CardGallerySlider = ({ images, name }: TCard) => {
	return (
		<Slider type='default' classNameBody='gap-x-[15px]'>
			{images.slice(1).map((i, index) => (
				<CardGalleryItem index={index} key={i} image={i} name={name} />
			))}
		</Slider>
	)
}
