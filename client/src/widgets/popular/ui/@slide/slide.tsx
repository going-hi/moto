import { Link } from 'react-router-dom'
import type { TCard } from '@/entities/card'
import { Typography, Slide } from '@/shared'

const { Title, Text } = Typography

export const PopularSlide = ({
	name,
	price,
	images,
	id
}: TCard & {
	index: number
}) => {
	return (
		<Slide className='basis-[718px] pr-[50px] group p-[6px]'>
			<Link to={`/card/${id}`}>
				<div className='duration-700 dhover:group-hover:scale-[102%]'>
					<div className='relative pb-[60%]'>
						<img
							className='absolute top-0 left-0 object-cover max-h-full w-full'
							src={images[0]}
							alt={name}
						/>
					</div>
					<div className='flex justify-between text-beige'>
						<Title variant='h4' className=''>
							{name}
						</Title>
						<Text className='bebas text-[40px] opacity-50'>
							{price}
						</Text>
					</div>
				</div>
			</Link>
		</Slide>
	)
}
