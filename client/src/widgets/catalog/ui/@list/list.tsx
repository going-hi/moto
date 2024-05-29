import { TCard } from '@/entities/card'
import { getElementClass, getSlicedArr } from '../../libs'
import { CatalogItem } from '../@item'
import { CatalogMore } from '../@more'
import { Container } from '@/layout'

export const CatalogList = ({ list }: { list: TCard[] }) => {
	if (!list) {
		return <></>
	}

	return (
		<Container>
			<div className='gap-y-[30px] flex flex-col mb-[50px]'>
				{getSlicedArr(list).map((i, indexSub) => (
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
								<CatalogItem
									{...i}
									className={cl}
									key={String(i.id)}
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
