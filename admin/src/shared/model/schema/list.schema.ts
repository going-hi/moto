import { z } from 'zod'

export const ListSchema = z.object({
	items: z.unknown().array(),
	meta: z.object({
		total: z.number()
	})
})
