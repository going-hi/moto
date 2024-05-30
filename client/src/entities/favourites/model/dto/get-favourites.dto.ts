import { z } from 'zod'
import { CardSchema } from '@/entities/card'
import { BaseSchema } from '@/shared'

export const GetFavouritesDtoSchema = z.object({
	items: z.array(
		BaseSchema.extend({
			product: z.lazy(() => CardSchema)
		})
	),
	meta: z.object({
		total: z.number()
	})
})
