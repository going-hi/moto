import { Card, TCard } from '@/entities/card'
import { Slide } from '@/shared'

export const OtherModelsSlide = (card: TCard) => {
	return (
		<Slide className='basis-[20.5%] group p-[6px] pr-[50px]'>
			<Card
				type='small'
				{...card}
				textColor='text-white'
				className='group-hover:scale-105 block'
			/>
		</Slide>
	)
}
