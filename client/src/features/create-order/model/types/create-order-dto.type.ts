import { z } from 'zod'
import { CreateOrderDtoSchema } from '../dto'

export type TCreateOrderDto = z.infer<typeof CreateOrderDtoSchema>
