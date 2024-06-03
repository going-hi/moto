import { $api, ZodParseError } from '@/shared'
import { GetCardDtoSchema, TGetCardDto } from '../model'

export const getCard = (id: number) =>
	$api
		.get(`/product/${id}`)
		.then(res =>
			new ZodParseError<TGetCardDto>(GetCardDtoSchema, res.data).result()
		)
