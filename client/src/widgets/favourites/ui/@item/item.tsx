import { ToggleCartButton } from '@/features/toggle-cart'
import { ToggleFavouritesButton } from '@/features/toggle-favourites'
import { Card, TCard } from '@/entities/card'

export const FavouritesItem = (props: TCard) => {
	return (
		<li className='basis-[30%] shrink-0 grow-0'>
			<Card variant='catalog' {...props} className='mb-[10px]'>
				<ToggleFavouritesButton
					className='absolute top-[20px] right-[20px] z-10 p-[10px] opacity-0 dhover:group-hover:opacity-100 duration-500'
					variant='label'
					isActive={false}
				/>
			</Card>
			<ToggleCartButton variant='primary' id={props.id} />
		</li>
	)
}
