import clsx from 'clsx'
import { Image, Typography } from '@/shared'
import type { TCardProps } from '../../model'

const { Title, Text } = Typography

export const CardBasket = ({
	images,
	name,
	price,
	BodyComponent,
	children,
	count,
	className
}: Omit<TCardProps, 'variant'> & { count?: number }) => {
	return (
		<li
			className={clsx(
				'flex justify-between  py-[20px] relative before:w-full before:h-[2px] before:content-[""] before:bg-gray-medium before:absolute before:top-0 before:left-0',
				className
			)}
		>
			<div className='relative pb-[24%] basis-[24%] bg-white mr-[20px]'>
				<Image
					className='absolute top-[50%] left-[50%] w-full h-full -translate-x-[50%] -translate-y-[50%] object-contain'
					src={images[0]}
				/>
			</div>
			<div className='flex justify-between basis-[76%]'>
				<div>
					<Title className='mb-[15px] !leading-[40px]' variant='h4'>
						{name}
					</Title>
					{children}
				</div>
				<div className='flex flex-col justify-between'>
					<Text className='text-[40px] leading-[40px] font-bold bebas'>
						{price * (count ?? 1)}
						<span className='ml-[3px] text-[35px] font-normal'>
							₽
						</span>
					</Text>
					{BodyComponent}
				</div>
			</div>
		</li>
	)
}
