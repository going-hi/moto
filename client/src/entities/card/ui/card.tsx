import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Typography } from '@/shared'
import type { TCard } from '../model'

const { Text } = Typography

export const Card = ({
	image,
	id,
	name,
	type,
	price
}: TCard & { type: 'small' | 'large' }) => {
	return (
		<Link
			to={`/card/${id}`}
			className={clsx(
				'dhover:hover:scale-105 duration-700',
				type === 'small' ? 'basis-[17.5%] ' : ''
			)}
		>
			<div className={clsx(type === 'large' && 'bg-white')}>
				<div className='relative mb-[10px] p-0 pb-[100%] bg-white'>
					<img
						className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[80%] h-[60%] object-cover'
						src={image}
						alt={name}
					/>
				</div>
				{type === 'small' ? (
					<Text className='text-[16px] font-medium text-black'>
						{name}
					</Text>
				) : (
					<div className='flex border-t-[1px] border-red-light justify-between px-[15px] py-[30px] text-[40px] font-bold leading-[40px] '>
						<Text className='-tracking-[4%] bebas'>{name}</Text>
						<Text className='bebas text-gray-dark'>{price}</Text>
					</div>
				)}
			</div>
		</Link>
	)
}
