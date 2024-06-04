import { z } from 'zod'
import { ReviewSchema } from '../schema'

export type TReview = z.infer<typeof ReviewSchema>
