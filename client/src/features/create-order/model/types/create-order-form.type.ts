import { z } from 'zod'
import { CreateOrderFormSchema } from '../schema'

export type TCreateOrderForm = z.infer<typeof CreateOrderFormSchema>
