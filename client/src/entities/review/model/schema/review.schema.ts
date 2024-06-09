import { z } from 'zod'
import { CardSchema } from '@/entities/card'
import { BaseSchema } from '@/shared'

export const ReviewSchema = BaseSchema.extend({
	text: z.string(),
	name: z.string(),
	product: z.lazy(() => CardSchema)
})
