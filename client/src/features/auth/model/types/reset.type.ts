import { z } from 'zod'
import { ResetSchema } from '../schema'

export type TReset = z.infer<typeof ResetSchema>
