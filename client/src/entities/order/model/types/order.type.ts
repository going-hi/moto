import { z } from 'zod'
import { OrderSchema } from '../schema'

export type TOrder = z.infer<typeof OrderSchema>
