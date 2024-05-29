import { $api } from '@/shared'
import { GetCardDtoSchema } from '../model'

export const getCard = (id: number) =>
	$api.get(`/product/${id}`).then(res => GetCardDtoSchema.parse(res.data))
