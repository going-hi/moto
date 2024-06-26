import clsx from 'clsx'
import { ToggleFavourites } from '@/features/toggle-favourites'
import { Card } from '@/entities/card'
import type { TCardProps } from '@/entities/card'

export const CatalogItem = (card: Omit<TCardProps, 'children' | 'variant'>) => {
	return (
		<Card
			classNameImageBody={clsx(!!card.className && 'pb-[90%]')}
			variant='catalog'
			{...card}
		>
			<ToggleFavourites
				className='absolute top-[20px] right-[20px] z-10 p-[10px] opacity-0 dhover:group-hover:opacity-100 duration-500'
				variant='label'
				id={card.id}
			/>
		</Card>
	)
}
