import { z } from 'zod'
import { AuthDtoSchema } from '../dto'

export type TAuthDto = z.infer<typeof AuthDtoSchema>
