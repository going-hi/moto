import { useEffect } from 'react'
import { useParamNameStore } from '@/entities/catalog'
import { useAppQuery } from '@/shared'
import { getCatalogFilters } from '../../api'
import { TGetFiltersDto, useSearchQueryStore } from '../../model'
import { useSearchFiltersStore } from '../../model/store/search-filters.store'

export const useGetCatalogFilter = () => {
	const {
		data: { type }
	} = useSearchQueryStore()
	const { name } = useParamNameStore()
	const { setData } = useSearchFiltersStore()

	const params = {
		category: name,
		type
	}

	const { data, isFetching } = useAppQuery<TGetFiltersDto>({
		queryKey: ['catalog/filters', params],
		queryFn: () => getCatalogFilters(params),
		enabled: name !== 'all' && !!type
	})

	useEffect(() => {
		if (data) {
			setData(data)
		}
	}, [data, setData])

	return { data, isFetching }
}
