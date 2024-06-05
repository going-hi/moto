import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import debounce from 'lodash.debounce'
import { useCallback, useEffect, useRef, useState } from 'react'
import { type TGetCards, getCards, TCardsDto } from '@/entities/card'
import {
	TStoreData,
	useSearchFiltersStore,
	useSearchQueryStore
} from '../../model'
import { formatQueryFilters } from '../formatQueryFilters'

export const useGetQuerySearchCards = () => {
	const {
		data: { sortBy, sortOrder, enabled },
		setData
	} = useSearchQueryStore()
	const [filterParams, setFilterParams] = useState<string>()
	const isMountQuerySet = useRef<boolean>(false)

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
		queryKey: ['user/catalog', params, filterParams],
		queryFn: ({ pageParam: page = 1 }) => {
			setData({ page: String(page) })
			return getCards({ ...params, page }, filterParams)
		},
		getNextPageParam: (lastPage, allPages) => {
			return lastPage && allPages.length + 1 <= lastPage.meta.total * 10
				? allPages.length + 1
				: null
		},
		enabled,
		throwOnError: false,
		retry: false
	})

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedFetch = useCallback(
		debounce((data: TStoreData) => {
			setFilterParams(encodeURI(JSON.stringify(formatQueryFilters(data))))
		}, 1000),
		[]
	)

	useEffect(() => {
		useSearchFiltersStore.subscribe(state => {
			if (state.data && isMountQuerySet.current) {
				debouncedFetch(state.data)
			}
			if (!isMountQuerySet.current) {
				isMountQuerySet.current = true
			}
		})
	}, [debouncedFetch])

	return query
}
