import { z } from 'zod'
import { OrderSchema } from '@/entities/order'

export const CreateOrderDtoSchema = OrderSchema.omit({
	items: true
}).extend({
	items: z.array(
		z.object({
			id: z.number()
		})
	)
})
