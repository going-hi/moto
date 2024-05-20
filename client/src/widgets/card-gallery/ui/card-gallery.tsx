import { SliderProvider, cards } from '@/shared'
import { CardGalleryBody } from './@body'
import { CardGallerySlider } from './@slider'

export const CardGallery = () => {
	return (
		<div className='basis-[50%] bg-white py-[65px] px-[12px] self-start'>
			<SliderProvider
				options={{
					loop: true,
					align: 'start',
					containScroll: false
				}}
			>
				<div className='flex flex-col'>
					<CardGalleryBody />
					<CardGallerySlider {...cards[0]} />
				</div>
			</SliderProvider>
		</div>
	)
}
