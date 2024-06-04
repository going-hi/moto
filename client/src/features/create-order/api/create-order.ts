import { TCreateOrder } from '@/entities/order'
import { $api, ZodParseError } from '@/shared'
import { type TCreateOrderDto, CreateOrderDtoSchema } from '../model'

export const createOrder = (body: TCreateOrder) =>
	$api
		.post('/order', body)
		.then(res =>
			new ZodParseError<TCreateOrderDto>(
				CreateOrderDtoSchema,
				res.data
			).result()
		)
