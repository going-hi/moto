import { cards } from '@/shared'
import { useCardGalleryStore } from '../../model'

export const CardGalleryBody = () => {
	const { activeIndex } = useCardGalleryStore()

	return (
		<div className='basis-full relative pb-[70%] mb-[31px]'>
			<img
				className='absolute top-[50%] left-[50%] w-[65%] h-[100%] -translate-x-[50%] -translate-y-[50%] object-cover'
				src={cards[0].images.slice(1)[activeIndex]}
			/>
		</div>
	)
}
