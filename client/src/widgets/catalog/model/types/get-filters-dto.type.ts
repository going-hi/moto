import { z } from 'zod'
import { GetFiltersDtoSchema } from '../dto'

export type TGetFiltersDto = z.infer<typeof GetFiltersDtoSchema>
