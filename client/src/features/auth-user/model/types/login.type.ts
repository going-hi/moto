import { z } from 'zod'
import { LoginSchema } from '../schema'

export type TLogin = z.infer<typeof LoginSchema>

export type TLoginFields = keyof TLogin
