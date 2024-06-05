import { z } from 'zod'
import { SortOrderSchema } from '../schema'

export type TSortOrder = z.infer<typeof SortOrderSchema>
