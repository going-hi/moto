import { z } from 'zod'

export const CreateOrderProductItemSchema = z.object({
	id: z.number(),
	count: z.number()
})
