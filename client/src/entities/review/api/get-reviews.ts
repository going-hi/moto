import { $api, ZodParseError } from '@/shared'
import { GetReviewsDtoSchema } from '../model/dto'

export const getReviews = () =>
	$api
		.get('/review')
		.then(res => new ZodParseError(GetReviewsDtoSchema, res.data).result())
