import { $api } from '@/shared'
import { ZodParseError } from '@/shared'
import { GetCardsDtoSchema, TGetCards } from '../model'
import type { TCardsDto } from '../model'

export const getCards = (options: TGetCards = {}) =>
	$api
		.get('/product', { params: { ...options, count: 10 } })
		.then(res =>
			new ZodParseError<TCardsDto>(GetCardsDtoSchema, res.data).result()
		)
