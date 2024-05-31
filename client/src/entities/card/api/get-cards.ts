import { $api } from '@/shared'
import { GetCardsDtoSchema } from '../model'

export const getCards = () =>
	$api.get('/product').then(res => GetCardsDtoSchema.parse(res.data))
