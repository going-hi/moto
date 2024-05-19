import clsx from 'clsx'
import { Card } from '@/entities/card'
import { cards } from '@/shared'
import { getElementClass, getSlicedArr } from '../../libs'
import { CatalogMore } from '../@more'
import { Container } from '@/layout'

export const CatalogList = () => {
	return (
		<Container>
			<div className='gap-y-[30px] flex flex-col mb-[50px]'>
				{getSlicedArr(cards).map((i, indexSub) => (
					<div
						key={String(indexSub)}
						className='grid grid-cols-3 gap-[30px] auto-rows-min auto-cols-min'
					>
						{i.map((i, indexItem) => {
							const cl = getElementClass(
								indexItem + 1,
								indexSub + 1
							)

							return (
								<Card
									{...i}
									key={String(i.id)}
									type='large'
									className={cl}
									classNameImageBody={clsx(
										!!cl && 'pb-[90%]'
									)}
								/>
							)
						})}
					</div>
				))}
			</div>
			<CatalogMore isLoading={false} />
		</Container>
	)
}
