import { Link } from 'react-router-dom'
import { Typography } from '@/shared'
import { TReview } from '../model'

const { Text } = Typography

export const Review = ({
	name,
	text,
	product: { id: cardId, name: cardName }
}: TReview) => {
	return (
		<div className='border-[#56544f] border-[1px] border-solid p-[30px] dhover:hover:scale-[102%] duration-700 will-change-transform'>
			<div className='mb-[60px]'>
				<div className='mb-[30px] inline-flex flex-col items-center'>
					<div className='w-[100px] rounded-[50%] h-[100px] mb-[4px] bg-green-600 flex items-center justify-center'>
						<Text className='text-white text-[50px] leading-[40px]'>
							{name.charAt(0)}
						</Text>
					</div>
					<Text className='text-[20px] font-medium leading-[26px] text-beige text-center'>
						{name.split(' ')[0]}
					</Text>
				</div>
				<Text className='text-beige text-[20px] leading-[22px] min-h-[90px]'>
					{text.slice(0, 150) + (text.length > 150 ? '...' : '')}
				</Text>
			</div>
			<Link
				to={`/card/${cardId}`}
				className='uppercase font-bold text-beige'
			>
				{cardName}
			</Link>
		</div>
	)
}
