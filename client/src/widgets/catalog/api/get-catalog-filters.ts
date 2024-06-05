import { $api, ZodParseError } from '@/shared'
import { TGetFiltersDto, TGetFiltersParams } from '../model'
import { GetFiltersDtoSchema } from '../model/dto'

export const getCatalogFilters = (params: TGetFiltersParams) =>
	$api
		.get('/product/filter', {
			params: { ...params }
		})
		.then(res =>
			new ZodParseError<TGetFiltersDto>(
				GetFiltersDtoSchema,
				res.data
			).result()
		)
