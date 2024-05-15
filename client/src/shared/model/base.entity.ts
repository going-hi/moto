import { z } from 'zod'

export const BaseEntity = z.object({
	id: z.number(),
	createDate: z.string(),
	updateDate: z.string()
})

export type TBase = z.infer<typeof BaseEntity>
