import { useGetQuerySearchCards } from '../libs'
import { useSearchQueryStore } from '../model'
import { CatalogFilter } from './@filter'
import { CatalogList } from './@list'
import { CatalogSort } from './@sort'
import { Container } from '@/layout'

export const Catalog = () => {
	const { isFetching, data } = useGetQuerySearchCards()
	const { page } = useSearchQueryStore()

	return (
		<>
			<div className='relative'>
				<Container>
					<div className='flex justify-between mb-[30px]'>
						<CatalogFilter />
						<CatalogSort />
					</div>
				</Container>
			</div>
			<CatalogList
				data={isFetching ? [...new Array(9 * page)] : data?.pages ?? []}
			/>
		</>
	)
}
