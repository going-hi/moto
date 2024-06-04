import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { type TGetCards, getCards, TCardsDto } from '@/entities/card'
import { useSearchQueryStore } from '../../model'

export const useGetQuerySearchCards = () => {
	const { sort, setPage } = useSearchQueryStore()

	const params: TGetCards = {}

	if (sort && sort.value !== '*') {
		params.sortBy = sort.value
		params.sortOrder = sort.order
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
			setPage(page)
			return getCards({ ...params, page })
		},
		getNextPageParam: (lastPage, allPages) => {
			return lastPage && allPages.length + 1 <= lastPage.meta.total * 10
				? allPages.length + 1
				: null
		}
	})
}
