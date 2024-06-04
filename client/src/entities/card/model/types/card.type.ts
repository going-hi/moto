import { z } from 'zod'
import { CardSchema } from '../schema'

export type TCard = z.infer<typeof CardSchema>
