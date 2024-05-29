import { z } from 'zod'
import { GetCardDtoSchema } from '../dto'

export type TGetCardDto = z.infer<typeof GetCardDtoSchema>
