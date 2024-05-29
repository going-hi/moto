import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Typography } from '@/shared'
import type { TCardProps } from '../../model'

const { Text } = Typography

export const CardCatalog = ({
	images,
	id,
	name,
	price,
	className,
	classNameImageBody,
	children
}: Omit<TCardProps, 'variant'>) => {
	return (
		<div
			className={clsx(
				'duration-700 group relative dhover:hover:scale-[102%]',
				className
			)}
		>
			<Link to={`/card/${id}`}>
				<div className='bg-white h-full'>
					<div
						className={clsx(
							'relative mb-[10px] bg-white pb-[80%]',
							classNameImageBody
						)}
					>
						<img
							className='absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] w-[70%] h-[70%] object-contain'
							src={images[0]}
							alt={name}
						/>
					</div>
					<div className='flex border-t-[1px] border-red-light justify-between px-[15px] py-[30px] text-[40px] font-bold leading-[40px] '>
						<Text className='-tracking-[4%] bebas'>{name}</Text>
						<Text className='bebas text-gray-dark'>{price}</Text>
					</div>
				</div>
			</Link>
			{children}
		</div>
	)
}
