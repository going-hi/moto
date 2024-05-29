import { z } from 'zod'
import { GetCardsDtoSchema } from '../dto'

export type TCardsDto = z.infer<typeof GetCardsDtoSchema>
