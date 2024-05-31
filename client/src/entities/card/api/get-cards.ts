import { $api } from '@/shared'
import { GetCardsDtoSchema, TGetCards } from '../model'

export const getCards = (options: TGetCards = {}) =>
	$api
		.get('/product', { params: { ...options } })
		.then(res => GetCardsDtoSchema.parse(res.data))
