import { z } from 'zod'
import { SortBySchema } from '../schema'

export type TSortBy = z.infer<typeof SortBySchema>
