import { z } from 'zod'
import { GetReviewsDtoSchema } from '../dto'

export type TGetReviewsDto = z.infer<typeof GetReviewsDtoSchema>
