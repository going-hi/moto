import { z } from 'zod'
import { EditPasswordSchema } from '../schema'

export type TEditPassword = z.infer<typeof EditPasswordSchema>
export type TEditPasswordDto = Omit<TEditPassword, 'confirmPassword'>
