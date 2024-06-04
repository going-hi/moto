import { z } from 'zod'
import { TCreateOrderProductItem } from '@/features/create-order'
import { CreateOrderSchema } from '../schema'

export type TCreateOrder = z.infer<typeof CreateOrderSchema> & {
	products: TCreateOrderProductItem[]
}
