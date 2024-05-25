import { z } from 'zod'
import { ResetEmailDtoSchema } from '../dto'
import { ResetEmailSchema } from '../schema'

export type TResetEmail = z.infer<typeof ResetEmailSchema>
export type TResetEmailDto = z.infer<typeof ResetEmailDtoSchema>
