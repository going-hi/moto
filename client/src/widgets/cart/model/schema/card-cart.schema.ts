import { z } from 'zod'
import { CardSchema } from '@/entities/card'

export const CardCartSchema = CardSchema.extend({
	count: z.number()
})
