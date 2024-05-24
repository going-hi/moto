import clsx from 'clsx'
import type { TCard } from '@/entities/card'
import { Slide } from '@/shared'
import { useCardGalleryStore } from '../../@model'

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
				'basis-[100px] h-[100px] dhover:hover:scale-105 p-[5px] duration-700 group'
			)}
		>
			<img
				className={clsx(
					'w-full h-full border-[#d9d9d9] border border-solid',
					index === activeIndex && '!border-black !border-[3px]',
					index !== activeIndex &&
						'cursor-pointer group-hover:border-[#a3a2a2] duration-700'
				)}
				src={image}
				alt={name}
			/>
		</Slide>
	)
}
