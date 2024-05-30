import { z } from 'zod'
import { CardSchema } from '@/entities/card'
import { BaseSchema } from '@/shared'

export const CardCartSchema = BaseSchema.extend({
	count: z.number(),
	product: z.lazy(() => CardSchema)
})
