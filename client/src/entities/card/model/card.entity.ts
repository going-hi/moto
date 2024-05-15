import { z } from 'zod'
import { BaseEntity } from '@/shared'

export const CardEntity = BaseEntity.extend({
	price: z.number(),
	name: z.string(),
	image: z.string()
})

export type TCard = z.infer<typeof CardEntity>
