import { z } from 'zod'
import { GetCardsDtoSchema } from '../dto'

export type TCardsDto = z.infer<typeof GetCardsDtoSchema>

export type TGetCards = {
	category?: string
	sortBy?: 'price' | 'createDate' | 'countOrders'
	sortOrder?: 'ASC' | 'DESC'
	page?: number
}
