import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { type TGetCards, getCards, TCardsDto } from '@/entities/card'
import { useSearchQueryStore } from '../../model'

export const useGetQuerySearchCards = () => {
	const { data, setData } = useSearchQueryStore()
	const { sortBy, sortOrder } = data

	const params: TGetCards = {}

	if (sortBy) {
		params.sortBy = sortBy
		params.sortOrder = sortOrder
	}

	return useInfiniteQuery<
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
		enabled: data.enabled
	})
}
