import { z } from 'zod'
import { EditInfoSchema } from '../schema'

export type TEditProfileInfo = z.infer<typeof EditInfoSchema>
