import { TCardsDto } from '@/entities/card'
import { getElementClass, getSlicedArr } from '../../libs'
import { CatalogItem } from '../@item'
import { CatalogItemSkeleton } from '../@item-skeleton'
import { CatalogMore } from '../@more'
import { Container } from '@/layout'

export const CatalogList = ({
	data,
	hasNextPage
}: {
	data: TCardsDto[]
	hasNextPage: boolean
}) => {
	if (!data) {
		return <></>
	}

	return (
		<Container>
			<div className='gap-y-[30px] flex flex-col mb-[50px]'>
				{getSlicedArr(data).map((i, indexSub) => (
					<div
						key={String(indexSub)}
						className='grid grid-cols-3 gap-[30px] auto-rows-min auto-cols-min'
					>
						{i.map((i, indexItem) => {
							const cl = getElementClass(
								indexItem + 1,
								indexSub + 1
							)

							return i ? (
								<CatalogItem
									{...i}
									className={cl}
									key={String(i.id)}
								/>
							) : (
								<CatalogItemSkeleton
									className={cl}
									key={String(indexItem)}
								/>
							)
						})}
					</div>
				))}
			</div>
			{hasNextPage && <CatalogMore isLoading={false} />}
		</Container>
	)
}
