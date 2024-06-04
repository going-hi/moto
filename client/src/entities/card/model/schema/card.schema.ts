import { z } from 'zod'
import { BaseSchema } from '@/shared'
import { CardCharacteristicSchema } from './card-characteristic.schema'

export const CardSchema = BaseSchema.extend({
	price: z.number(),
	name: z.string(),
	images: z.array(z.string()),
	description: z.string().optional(),
	category: z.string(),
	type: z.string(),
	countOrders: z.number()
})

export const CardFullSchema = CardSchema.extend({
	characteristics: z.array(z.lazy(() => CardCharacteristicSchema))
})
