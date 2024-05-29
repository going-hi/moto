import { z } from 'zod'
import { CardCartSchema } from '../schema'

export const GetCartDtoSchema = z.object({
	items: z.array(z.lazy(() => CardCartSchema)),
	meta: z.object({
		total: z.number(),
		totalPrice: z.number()
	})
})
