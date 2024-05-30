import { TCard } from '@/entities/card'
import { Slider } from '@/shared'
import { CardGallerySlide } from '../@slide'

export const CardGallerySlider = ({
	images,
	name,
	isLoading
}: Pick<TCard, 'images' | 'name'> & { isLoading: boolean }) => {
	if (!images) {
		return <></>
	}

	return (
		<Slider type='default' classNameBody='gap-x-[15px]'>
			{images.map((i, index) => (
				<CardGallerySlide
					isLoading={isLoading}
					index={index}
					key={String(index)}
					image={i}
					name={name}
				/>
			))}
		</Slider>
	)
}
