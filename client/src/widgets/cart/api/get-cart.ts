import { GetCartDtoSchema } from '@/entities/cart'
import { $api } from '@/shared'

export const getCart = () =>
	$api.get('/basket').then(res => GetCartDtoSchema.parse(res.data))
