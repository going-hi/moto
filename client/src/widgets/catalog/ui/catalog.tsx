import { useEffect, useRef } from 'react'
import { z } from 'zod'
import { useParamNameStore } from '@/entities/catalog'
import { useValidQueryParams, CatalogCardsTypesMap } from '@/shared'
import { useGetQuerySearchCards, useSetCatalogQuery } from '../libs'
import { SortBySchema, SortOrderSchema, useSearchQueryStore } from '../model'
import { CatalogFilter } from './@filter'
import { CatalogList } from './@list'
import { CatalogSort } from './@sort'
import { Container } from '@/layout'

export const Catalog = () => {
	const { data, setData } = useSearchQueryStore()
	const { isFetching, data: cards } = useGetQuerySearchCards()
	const isSetQueries = useRef<boolean>(false)
	useSetCatalogQuery(isSetQueries.current)
	const { name } = useParamNameStore()

	const params = useValidQueryParams({
		sortBy: SortBySchema,
		sortOrder: SortOrderSchema,
		q: z.string().optional(),
		price: z.tuple([z.string().regex(/^\d+$/), z.string().regex(/^\d+$/)]),
		type: z.string().optional()
	})

	useEffect(() => {
		setData({
			...params,
			enabled: true,
			type:
				(params.type as string) ??
				(CatalogCardsTypesMap[name] ?? [])[0]?.value
		})
		isSetQueries.current = true
	}, [setData, params, name])

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
				data={
					isFetching
						? [...new Array(9 * Number(data?.page))]
						: cards?.pages ?? []
				}
			/>
		</>
	)
}
