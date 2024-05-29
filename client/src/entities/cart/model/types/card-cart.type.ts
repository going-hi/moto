import { z } from 'zod'
import { CardCartSchema } from '../schema'

export type TCardCart = z.infer<typeof CardCartSchema>
