import { z } from 'zod'
import { CreateOrderSchema } from '@/entities/order'
import { CreateOrderProductItemSchema } from './create-order-product-item.schema'

export const CreateOrderFormSchema = CreateOrderSchema.extend({
	products: z.array(z.lazy(() => CreateOrderProductItemSchema))
})
