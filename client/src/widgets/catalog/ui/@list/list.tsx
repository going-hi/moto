import { Card } from '@/entities/card'
import { cards } from '@/shared'

export const CatalogList = () => {
	return (
		<div className='grid grid-cols-3 gap-[30px]'>
			{cards.map(i => (
				<Card {...i} key={String(i.id)} type='large' />
			))}
		</div>
	)
}
