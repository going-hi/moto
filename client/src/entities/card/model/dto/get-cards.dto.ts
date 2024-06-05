import { z } from 'zod'
import { CardSchema } from '@/entities/card'

export const GetCardsDtoSchema = z.object({
	items: z.array(z.lazy(() => CardSchema)),
	meta: z.object({
		total: z.number()
	})
})
