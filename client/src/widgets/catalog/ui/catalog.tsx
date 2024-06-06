import { useEffect, useRef } from 'react'
import { z } from 'zod'
import { useParamNameStore } from '@/entities/catalog'
import { useValidQueryParams, CatalogCardsTypesMap } from '@/shared'
import {
	useGetCatalogFilter,
	useGetQuerySearchCards,
	useSetCatalogQuery
} from '../libs'
import { SortBySchema, SortOrderSchema, useSearchQueryStore } from '../model'
import { CatalogFilter } from './@filter'
import { CatalogList } from './@list'
import { CatalogSort } from './@sort'
import { Container } from '@/layout'

export const Catalog = () => {
	const { data, setData } = useSearchQueryStore()
	const { data: filters, isFetching: isFiltersLoading } =
		useGetCatalogFilter()
	const { isFetching, data: cards, hasNextPage } = useGetQuerySearchCards()
	const isSetQueries = useRef<boolean>(false)
	useSetCatalogQuery(isSetQueries.current)
	const { name } = useParamNameStore()

	const params = useValidQueryParams({
		sortBy: SortBySchema,
		sortOrder: SortOrderSchema,
		q: z.string().optional(),
		'price[0]': z.string().regex(/^\d+$/),
		'price[1]': z.string().regex(/^\d+$/),
		type: z.string().optional()
	})

	useEffect(() => {
		setData({
			...params,
			enabled: true,
			price: {
				state: [
					params['price[0]'] ?? '0',
					params['price[1]'] ?? '0'
				] as [string, string],
				default: ['0', '0']
			},
			type:
				(params.type as string) ??
				(CatalogCardsTypesMap[name] ?? [])[0]?.value
		})
		isSetQueries.current = true
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name])

	return (
		<>
			<div className='relative'>
				<Container>
					<div className='flex justify-between mb-[36px]'>
						<CatalogFilter
							isLoading={isFiltersLoading}
							filters={filters}
						/>
						<CatalogSort />
					</div>
				</Container>
			</div>
			<CatalogList
				hasNextPage={hasNextPage}
				data={
					isFetching
						? [...new Array(9 * Number(data?.page))]
						: cards?.pages ?? []
				}
			/>
		</>
	)
}
