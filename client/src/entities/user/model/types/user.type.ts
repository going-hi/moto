import { z } from 'zod'
import { UserSchema } from '../schema'

export type TUser = z.infer<typeof UserSchema>
