import { $api, ZodParseError } from '@/shared'
import { GetOrderDtoSchema } from '../model'

export const getOrders = () =>
	$api
		.get('/order')
		.then(res => new ZodParseError(GetOrderDtoSchema, res.data).result())
