import { TCard } from '@/entities/card'
import { Slider } from '@/shared'
import { CardGallerySlide } from '../@slide'

export const CardGallerySlider = ({ images, name }: TCard) => {
	if (!images) {
		return <></>
	}

	return (
		<Slider type='default' classNameBody='gap-x-[15px]'>
			{images.slice(1).map((i, index) => (
				<CardGallerySlide index={index} key={i} image={i} name={name} />
			))}
		</Slider>
	)
}
