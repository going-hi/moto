import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import debounce from 'lodash.debounce'
import { useCallback, useEffect, useRef, useState } from 'react'
import { type TGetCards, getCards, TCardsDto } from '@/entities/card'
import { useParamNameStore } from '@/entities/catalog'
import {
	TStoreData,
	useSearchFiltersStore,
	useSearchQueryStore
} from '../../model'
import { formatQueryFilters } from '../formatQueryFilters'

export const useGetQuerySearchCards = () => {
	const { data, setData } = useSearchQueryStore()

	const { sortBy, sortOrder, enabled, price, type, q } = data

	const [filterParams, setFilterParams] = useState<string>('')
	const isMountQuerySet = useRef<boolean>(false)
	const { name } = useParamNameStore()

	const params: TGetCards = {
		q: q ?? ''
	}

	if (name !== 'all') {
		params.category = name
	}

	if (!['all', 'bicycles'].includes(name)) {
		params['type'] = type
	}

	if (price.state[0] !== '0' || price.state[1] !== '0') {
		;(params['price[0]'] = price.state[0]),
			(params['price[1]'] = price.state[1])
	}

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
		queryKey: ['user/catalog', params, filterParams, q],
		queryFn: ({ pageParam: page = 1 }) => {
			setData({ ...data, page: String(page) })
			return getCards({ ...params, page }, filterParams)
		},
		getNextPageParam: (lastPage, allPages) =>
			!!lastPage && allPages.length * 10 <= lastPage.meta.total
				? allPages.length + 1
				: undefined,

		enabled,
		throwOnError: false,
		retry: false
	})

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedFetch = useCallback(
		debounce((data: TStoreData) => {
			const formattedData = formatQueryFilters(data)
			if (Object.keys(formattedData).length) {
				setFilterParams(encodeURI(JSON.stringify(formattedData)))
			} else {
				setFilterParams('')
			}
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
