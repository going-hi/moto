import { useParamNameStore } from '@/entities/catalog'
import { useAppQuery } from '@/shared'
import { getCatalogFilters } from '../../api'
import { TGetFiltersDto, useSearchQueryStore } from '../../model'

export const useGetCatalogFilter = () => {
	const {
		data: { type }
	} = useSearchQueryStore()
	const { name } = useParamNameStore()

	const params = {
		category: name,
		type
	}

	return useAppQuery<TGetFiltersDto>({
		queryKey: ['catalog/filters', params],
		queryFn: () => getCatalogFilters(params),
		enabled: name !== 'all' && !!type
	})
}
