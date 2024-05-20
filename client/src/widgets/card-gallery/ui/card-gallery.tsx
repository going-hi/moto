import { SliderProvider, cards } from '@/shared'
import { CardGallerySlider } from './@slider'

export const CardGallery = () => {
	return (
		<div className='basis-[50%] bg-white'>
			<SliderProvider
				options={{
					loop: true,
					containScroll: 'keepSnaps',
					align: 'start'
				}}
			>
				<CardGallerySlider {...cards[0]} />
			</SliderProvider>
		</div>
	)
}
