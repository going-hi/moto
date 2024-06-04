import { z } from 'zod'
import { CreateOrderProductItemSchema } from '../schema'

export type TCreateOrderProductItem = z.infer<
	typeof CreateOrderProductItemSchema
>
