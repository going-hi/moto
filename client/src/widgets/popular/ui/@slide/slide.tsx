import clsx from 'clsx'
import { Typography } from '@/shared'
import type { TPopularCardItem } from '../@model'

const { Title, Text } = Typography

export const PopularSlide = ({
	name,
	price,
	image,
	onClick,
	index,
	isActive
}: TPopularCardItem & {
	onClick: (i: number) => void
	index: number
	isActive: boolean
}) => {
	return (
		<aside
			onClick={() => onClick(index)}
			className={clsx(
				'shrink-0 grow-0 basis-[700px] pr-[50px] group',
				!isActive && 'cursor-pointer'
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
				<div className='flex justify-between text-beige px-[5px]'>
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
