import { TCard } from '@/entities/card'
import { Slider } from '@/shared'
import { CardGalleryItem } from '../@item'

export const CardGallerySlider = ({ images, name }: TCard) => {
	return (
		<Slider type='default'>
			{images.map(i => (
				<CardGalleryItem key={i} image={i} name={name} />
			))}
		</Slider>
	)
}
