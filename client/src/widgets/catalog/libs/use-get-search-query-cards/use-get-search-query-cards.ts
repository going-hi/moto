import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import debounce from 'lodash.debounce'
import { useEffect } from 'react'
import { type TGetCards, getCards, TCardsDto } from '@/entities/card'
import { useSearchFiltersStore, useSearchQueryStore } from '../../model'
import { formatQueryFilters } from '../formatQueryFilters'
import { useGetCatalogFilter } from '../use-get-catalog-filter'

export const useGetQuerySearchCards = () => {
	const {
		data: { sortBy, sortOrder, enabled },
		setData
	} = useSearchQueryStore()

	const params: TGetCards = {}

	if (sortBy) {
		params.sortBy = sortBy
		params.sortOrder = sortOrder
	}

	const query = useInfiniteQuery<
		TCardsDto | null,
		unknown,
		InfiniteData<TCardsDto[]>,
		// @ts-expect-error expect generic
		unknown,
		number
	>({
		queryKey: ['user/catalog', params],
		queryFn: ({ pageParam: page = 1 }) => {
			setData({ page: String(page) })
			return getCards({ ...params, page })
		},
		getNextPageParam: (lastPage, allPages) => {
			return lastPage && allPages.length + 1 <= lastPage.meta.total * 10
				? allPages.length + 1
				: null
		},
		enabled
	})

	useEffect(() => {
		useSearchFiltersStore.subscribe(state => {
			formatQueryFilters(state.data)
		})
	}, [])

	return query
}
