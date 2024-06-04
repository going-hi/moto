import { useInfiniteQuery } from '@tanstack/react-query'
import { type TGetCards, getCards } from '@/entities/card'
import { useSearchQueryStore } from '../../model'

export const useGetQuerySearchCards = () => {
	const { sort } = useSearchQueryStore()

	const params: TGetCards = {}

	if (sort && sort.value !== '*') {
		params.sortBy = sort.value
		params.sortOrder = sort.order
	}

	return useInfiniteQuery({
		queryKey: ['user/catalog'],
		queryFn: ({ pageParam: page }) => getCards({ ...params, page }),
		initialPageParam: 1,
		getNextPageParam: pageParam => {
			console.log(pageParam)
			return null
		}
	})
}
