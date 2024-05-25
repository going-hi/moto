import clsx from 'clsx'
import type { TCard } from '@/entities/card'
import { Slide } from '@/shared'
import { useCardGalleryStore } from '../../model'

export const CardGallerySlide = ({
	image,
	name,
	index
}: Pick<TCard, 'name'> & {
	image: string
	index: number
}) => {
	const { activeIndex, setActiveIndex } = useCardGalleryStore()

	return (
		<Slide
			onClick={() => setActiveIndex(index)}
			className={clsx(
				'basis-[100px] h-[100px] dhover:hover:scale-105 duration-700 group p-[5px] will-change-transform'
			)}
		>
			<div className='h-full border-[#d9d9d9] border border-solid'>
				<img
					className={clsx(
						'w-full h-full ',
						index === activeIndex && '!border-black !border-[3px]',
						index !== activeIndex && 'cursor-pointer'
					)}
					src={image}
					alt={name}
				/>
			</div>
		</Slide>
	)
}
