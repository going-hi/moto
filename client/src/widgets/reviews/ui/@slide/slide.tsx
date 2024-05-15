import { Link } from 'react-router-dom'
import { TReview } from '@/entities/review'
import { Slide, Typography } from '@/shared'

const { Text } = Typography

export const ReviewsSlide = ({
	index,
	user: { image, name: userName },
	text,
	card: { id: cardId, name: cardName }
}: TReview & { index: number }) => {
	return (
		<Slide className='basis-[670px] p-[6px] pr-[50px]' index={index}>
			<div className='border-[#56544f] border-[1px] border-solid p-[30px] hover:scale-[102%] duration-700'>
				<div className='mb-[130px]'>
					<div className='mb-[30px]'>
						<img
							className='rounded-[50%] w-[100px] h-[100px] mb-[4px]'
							src={image}
							alt={cardName}
						/>
						<Text className='text-[20px] font-medium leading-[26px] text-beige pl-[8px]'>
							{userName}
						</Text>
					</div>
					<Text className='text-beige text-[20px] leading-[22px]'>
						{text}
					</Text>
				</div>
				<Link
					to={`/card/${cardId}`}
					className='uppercase font-bold text-beige'
				>
					{cardName}
				</Link>
			</div>
		</Slide>
	)
}
