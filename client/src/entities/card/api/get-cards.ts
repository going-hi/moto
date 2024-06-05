import { $api } from '@/shared'
import { ZodParseError } from '@/shared'
import { GetCardsDtoSchema, TGetCards } from '../model'
import type { TCardsDto } from '../model'

export const getCards = (options: TGetCards = {}, filters?: string) =>
	$api
		.get('/product', {
			params: { ...options, count: 10, filters }
		})
		.then(res =>
			new ZodParseError<TCardsDto>(GetCardsDtoSchema, res.data).result()
		)
