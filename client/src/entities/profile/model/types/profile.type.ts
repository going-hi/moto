import { z } from 'zod'
import { ProfileSchema } from '../schema'

export type TProfile = z.infer<typeof ProfileSchema> & {
	[key: string]: unknown
}
