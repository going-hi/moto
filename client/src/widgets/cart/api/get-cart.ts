import { GetCartDtoSchema, TGetCartDto } from '@/entities/cart'
import { $api, ZodParseError } from '@/shared'

export const getCart = () =>
	$api
		.get('/basket')
		.then(res =>
			new ZodParseError<TGetCartDto>(GetCartDtoSchema, res.data).result()
		)
