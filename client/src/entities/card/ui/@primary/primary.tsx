import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Typography } from '@/shared'
import { TCardProps } from '../../model'

const { Text } = Typography

export const CardPrimary = ({
	images,
	id,
	name,
	className,
	classNameImageBody,
	textColor,
	children
}: Omit<TCardProps, 'variant'>) => {
	return (
		<div
			className={clsx(
				'duration-700 group relative basis-[17.5%] dhover:hover:scale-105',
				className
			)}
		>
			<Link to={`/card/${id}`}>
				<div>
					<div
						className={clsx(
							'relative mb-[10px] bg-white pb-[100%]',
							classNameImageBody
						)}
					>
						<img
							className='w-[80%] h-[60%] object-cover absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] '
							src={images[0]}
							alt={name}
						/>
					</div>
					<Text
						className={clsx(
							'text-[16px] font-medium text-black',
							textColor
						)}
					>
						{name}
					</Text>
				</div>
			</Link>
			{children}
		</div>
	)
}
