import { Link } from 'react-router-dom'
import { Typography } from '@/shared'
import type { TCard } from '../model'

const { Text } = Typography

export const Card = ({ image, id, name }: TCard) => {
	return (
		<Link
			to={`/card/${id}`}
			className='basis-[17%] hover:scale-105 duration-700'
		>
			<div>
				<div className='relative mb-[10px] pb-[100%] bg-white'>
					<img
						className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[80%] h-[60%] object-cover'
						src={image}
						alt={name}
					/>
				</div>
				<Text className='text-[16px] font-medium text-black'>
					{name}
				</Text>
			</div>
		</Link>
	)
}
