import { $api } from '@/shared'
import { ZodParseError } from '@/shared'
import { GetCardsDtoSchema, TGetCards } from '../model'
import type { TCardsDto } from '../model'

export const getCards = (options: TGetCards = {}, filters?: string) => {
	const params: { [key: string]: unknown } = {
		...options,
		count: 10
	}

	if (filters?.length) {
		params['filters'] = filters
	}

	return $api
		.get('/product', {
			params
		})
		.then(res =>
			new ZodParseError<TCardsDto>(GetCardsDtoSchema, res.data).result()
		)
}
