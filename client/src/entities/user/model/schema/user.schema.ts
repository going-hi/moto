import { z } from 'zod'
import { BaseSchema } from '@/shared'

export const UserSchema = BaseSchema.extend({
	name: z.string(),
	image: z.string()
})
