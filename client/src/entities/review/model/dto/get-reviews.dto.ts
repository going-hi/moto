import { z } from 'zod'
import { ReviewSchema } from '../schema'

export const GetReviewsDtoSchema = z.object({
	items: z.array(z.lazy(() => ReviewSchema)),
	meta: z.object({
		total: z.number()
	})
})
