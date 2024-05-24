import { z } from 'zod'
import { CardSchema } from '@/entities/card'
import { UserSchema } from '@/entities/user'
import { BaseSchema } from '@/shared'

export const ReviewSchema = BaseSchema.extend({
	text: z.string(),
	user: z.lazy(() => UserSchema),
	card: z.lazy(() => CardSchema)
})
