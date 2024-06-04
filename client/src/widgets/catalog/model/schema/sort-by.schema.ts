import { z } from 'zod'

export const SortBySchema = z.union([
	z.literal(''),
	z.literal('countOrders'),
	z.literal('price')
])
