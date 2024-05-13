import { Typography } from '@/shared'
import type { TPopularCardItem } from '../@model'

const { Title, Text } = Typography

export const PopularSlide = ({
	name,
	price,
	image,
	onClick,
	index
}: TPopularCardItem & {
	onClick: (i: number) => void
	index: number
	isActive: boolean
}) => {
	return (
		<aside
			onClick={() => onClick(index)}
			className='shrink-0 grow-0 basis-[700px] pr-[50px] cursor-pointer '
		>
			<div className='relative pb-[63%]'>
				<img
					className='absolute top-0 left-0 w-full h-auto'
					src={image}
					alt={name}
				/>
			</div>
			<div className='flex justify-between text-beige'>
				<Title variant='h4' className=''>
					{name}
				</Title>
				<Text className='bebas text-[40px] opacity-50'>{price}</Text>
			</div>
		</aside>
	)
}
