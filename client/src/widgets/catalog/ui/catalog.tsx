import { useEffect, useRef } from 'react'
import { z } from 'zod'
import { useValidQueryParams } from '@/shared'
import { useGetQuerySearchCards } from '../libs'
import { SortBySchema, SortOrderSchema, useSearchQueryStore } from '../model'
import { CatalogFilter } from './@filter'
import { CatalogList } from './@list'
import { CatalogSort } from './@sort'
import { Container } from '@/layout'

export const Catalog = () => {
	const { data, setData } = useSearchQueryStore()
	const isMounted = useRef<boolean>(false)

	const { isFetching, data: cards } = useGetQuerySearchCards()

	const params = useValidQueryParams({
		sortBy: SortBySchema,
		sortOrder: SortOrderSchema,
		q: z.string().optional()
	})

	useEffect(() => {
		setData({ ...params, enabled: true })
	}, [setData, params])

	useEffect(() => {}, [data])

	useEffect(() => {
		isMounted.current = true
	}, [])

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
						? [...new Array(9 * data?.page)]
						: cards?.pages ?? []
				}
			/>
		</>
	)
}
