import { useGetCards } from '../libs'
import { CatalogFilter } from './@filter'
import { CatalogList } from './@list'
import { CatalogSort } from './@sort'
import { Container } from '@/layout'

export const Catalog = () => {
	const { isLoading, data } = useGetCards()

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
				list={isLoading ? [...new Array(9)] : data?.items ?? []}
			/>
		</>
	)
}
