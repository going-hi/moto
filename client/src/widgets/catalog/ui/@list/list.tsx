import clsx from 'clsx'
import { Card } from '@/entities/card'
import { cards } from '@/shared'
import { getElementClass } from '../../libs'
import { CatalogMore } from '../@more'
import { Container } from '@/layout'

export const CatalogList = () => {
	return (
		<Container>
			<div className='grid gap-[30px] grid-cols-3 grid-rows-3 mb-[50px]'>
				{cards.slice(0, 7).map((i, index) => (
					<Card
						{...i}
						key={String(i.id)}
						type='large'
						className={clsx(getElementClass(index + 1))}
					/>
				))}
			</div>
			<CatalogMore isLoading={false} />
		</Container>
	)
}
