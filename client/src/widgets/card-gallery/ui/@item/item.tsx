import type { TCard } from '@/entities/card'
import { Slide } from '@/shared'

export const CardGalleryItem = ({
	image,
	name
}: Pick<TCard, 'name'> & { image: string }) => {
	return (
		<Slide className='basis-[100px] h-[100px]'>
			<img className='w-full h-full' src={image} alt={name} />
		</Slide>
	)
}
