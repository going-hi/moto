import { z } from 'zod'

export const SortOrderSchema = z.union([z.literal('ASC'), z.literal('DESC')])
