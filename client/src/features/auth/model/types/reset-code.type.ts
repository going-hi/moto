import { z } from 'zod'
import { ResetCodeSchema } from '../schema'

type TReset = z.infer<typeof ResetCodeSchema>

export type TResetCode = Omit<TReset, 'email'>
export type TResetCodeDto = TReset
