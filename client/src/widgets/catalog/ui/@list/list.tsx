import clsx from 'clsx'
import { useState } from 'react'
import { Card } from '@/entities/card'
import { cards } from '@/shared'
import { getElementClass } from '../../libs'
import { CatalogMore } from '../@more'

export const CatalogList = () => {
	const [page, setPage] = useState<number>(1)

	return (
		<>
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
			<CatalogMore setPage={setPage} isLoading={false} />
		</>
	)
}
