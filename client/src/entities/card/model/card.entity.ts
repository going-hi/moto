import { z } from 'zod'
import { BaseEntity } from '@/shared'

export const CardEntity = BaseEntity.extend({
	price: z.number(),
	name: z.string(),
	images: z.array(z.string()),
	description: z.string().optional()
})

export type TCard = z.infer<typeof CardEntity>
