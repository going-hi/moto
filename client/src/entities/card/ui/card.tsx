import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Typography } from '@/shared'
import type { TCard } from '../model'

const { Text } = Typography

export const Card = ({
	images,
	id,
	name,
	type,
	price,
	className,
	classNameImageBody,
	textColor
}: TCard & {
	type: 'small' | 'large'
	className?: string
	classNameImageBody?: string
	textColor?: string
}) => {
	return (
		<Link
			to={`/card/${id}`}
			className={clsx(
				'duration-700',
				type === 'small'
					? 'basis-[17.5%] dhover:hover:scale-105'
					: 'dhover:hover:scale-[102%]',
				className
			)}
		>
			<div className={clsx(type === 'large' && 'bg-white h-full')}>
				<div
					className={clsx(
						'relative mb-[10px] bg-white',
						type === 'small' ? 'pb-[100%]' : 'pb-[80%]',
						classNameImageBody
					)}
				>
					<img
						className={clsx(
							type === 'small'
								? 'w-[80%] h-[60%] object-cover'
								: 'w-[70%] h-[70%] object-contain',
							'absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] '
						)}
						src={images[0]}
						alt={name}
					/>
				</div>
				{type === 'small' ? (
					<Text
						className={clsx(
							'text-[16px] font-medium text-black',
							textColor
						)}
					>
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
