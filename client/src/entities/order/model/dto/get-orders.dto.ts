import { z } from 'zod'
import { OrderSchema } from '../schema'

export const GetOrderDtoSchema = z.object({
	items: z.array(z.lazy(() => OrderSchema)),
	meta: z.object({
		total: z.number()
	})
})
