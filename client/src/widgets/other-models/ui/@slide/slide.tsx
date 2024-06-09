import { Card, TCard } from '@/entities/card'
import { Slide } from '@/shared'

export const OtherModelsSlide = (card: TCard) => {
	return (
		<Slide className='basis-[20.5%] group p-[6px] pr-[50px]'>
			<Card
				variant='primary'
				{...card}
				textColor='text-beige'
				className='group-hover:scale-105 block'
			/>
		</Slide>
	)
}
