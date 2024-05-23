import { z } from 'zod'
import { RefreshDtoSchema } from '../dto'

export type TRefreshDto = z.infer<typeof RefreshDtoSchema>
