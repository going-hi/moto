import clsx from 'clsx'
import type { TCard } from '@/entities/card'
import { Image, Skeleton, Slide } from '@/shared'
import { useCardGalleryStore } from '../../model'

export const CardGallerySlide = ({
	image,
	name,
	index,
	isLoading
}: Pick<TCard, 'name'> & {
	image: string
	index: number
	isLoading: boolean
}) => {
	const { activeIndex, setActiveIndex } = useCardGalleryStore()

	return isLoading ? (
		<Skeleton className='basis-[100px] aspect-square' />
	) : (
		<Slide
			onClick={() => setActiveIndex(index)}
			className={clsx(
				'basis-[100px] aspect-square dhover:hover:scale-105 duration-700 group p-[5px] will-change-transform'
			)}
		>
			<div className='h-full border-[#d9d9d9] border border-solid relative'>
				<Image
					className={clsx(
						'w-full full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-cover',
						index !== activeIndex && 'cursor-pointer'
					)}
					src={image}
					alt={name}
				/>
			</div>
		</Slide>
	)
}
