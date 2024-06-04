import { z } from 'zod'
import { CardSchema } from '@/entities/card'
import { BaseSchema } from '@/shared'

export const FavouritesItemSchema = BaseSchema.extend({
	product: z.lazy(() => CardSchema)
})

export const GetFavouritesDtoSchema = z.object({
	items: z.array(z.lazy(() => FavouritesItemSchema)),
	meta: z.object({
		total: z.number()
	})
})
