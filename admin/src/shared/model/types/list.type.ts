import { z } from 'zod'
import { ListSchema } from '../schema'

export type TList = z.infer<typeof ListSchema>
