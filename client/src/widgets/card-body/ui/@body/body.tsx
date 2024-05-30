import { Image, Skeleton } from '@/shared'
import { useCardGalleryStore } from '../../model'

export const CardGalleryBody = ({
	images,
	isLoading
}: {
	images: string[]
	isLoading: boolean
}) => {
	const { activeIndex } = useCardGalleryStore()

	if (!images) {
		return <></>
	}

	return (
		<div className='basis-full relative pb-[70%] mb-[31px]'>
			{isLoading ? (
				<Skeleton className='absolute top-0 left-0 w-full h-full' />
			) : (
				<Image
					className='absolute top-[50%] left-[50%] w-[65%] h-[90%] -translate-x-[50%] -translate-y-[50%] object-contain'
					src={images[activeIndex]}
				/>
			)}
		</div>
	)
}
