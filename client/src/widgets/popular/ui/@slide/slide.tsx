import clsx from 'clsx'
import type { TCard } from '@/entities/card'
import { Typography, useSlider } from '@/shared'

const { Title, Text } = Typography

export const PopularSlide = ({
	name,
	price,
	image,
	index
}: TCard & {
	index: number
}) => {
	const { activeIndex, onClick } = useSlider()

	return (
		<aside
			onClick={() => onClick(index)}
			className={clsx(
				'shrink-0 grow-0 basis-[672px] pr-[50px] group p-[6px]',
				index !== activeIndex && 'cursor-pointer'
			)}
		>
			<div className='duration-700 group-hover:scale-[102%]'>
				<div className='relative pb-[60%]'>
					<img
						className='absolute top-0 left-0 object-cover max-h-full w-full'
						src={image}
						alt={name}
					/>
				</div>
				<div className='flex justify-between text-beige'>
					<Title variant='h4' className=''>
						{name}
					</Title>
					<Text className='bebas text-[40px] opacity-50'>
						{price}
					</Text>
				</div>
			</div>
		</aside>
	)
}
