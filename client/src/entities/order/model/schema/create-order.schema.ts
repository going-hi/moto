import { z } from 'zod'
import { OrderSchema } from './order.schema'

export const CreateOrderSchema = OrderSchema.omit({
	items: true,
	status: true,
	total: true
}).extend({
	confirmRules: z.boolean()
})
