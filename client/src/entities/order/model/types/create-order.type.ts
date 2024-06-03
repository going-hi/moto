import { z } from 'zod'
import { CreateOrderSchema } from '../schema'

export type TCreateOrder = z.infer<typeof CreateOrderSchema>
