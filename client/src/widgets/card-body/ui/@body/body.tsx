import { Image } from '@/shared'
import { useCardGalleryStore } from '../../model'

export const CardGalleryBody = ({ images }: { images: string[] }) => {
	const { activeIndex } = useCardGalleryStore()

	if (!images) {
		return <></>
	}

	return (
		<div className='basis-full relative pb-[70%] mb-[31px]'>
			<Image
				className='absolute top-[50%] left-[50%] w-[65%] h-[100%] -translate-x-[50%] -translate-y-[50%] object-cover'
				src={images.slice(1)[activeIndex]}
			/>
		</div>
	)
}
