import { z } from 'zod'
import { CardEntity } from '@/entities/card'
import { UserEntity } from '@/entities/user'
import { BaseEntity } from '@/shared'

export const ReviewEntity = BaseEntity.extend({
	text: z.string(),
	user: z.lazy(() => UserEntity),
	card: z.lazy(() => CardEntity)
})

export type TReview = z.infer<typeof ReviewEntity>
