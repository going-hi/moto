import { z } from 'zod'
import { GetOrderDtoSchema } from '../dto'

export type TGetOrdersDto = z.infer<typeof GetOrderDtoSchema>
