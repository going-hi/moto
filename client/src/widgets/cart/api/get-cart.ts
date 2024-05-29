import { $api } from '@/shared'
import { GetCartDtoSchema } from '../model/dto'

export const getCart = () =>
	$api.get('/basket').then(res => GetCartDtoSchema.parse(res.data))
