import { z } from 'zod'
import { CardSchema, CardFullSchema } from '../schema'

export type TCard = z.infer<typeof CardSchema>
export type TCardFull = z.infer<typeof CardFullSchema>
