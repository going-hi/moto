import { z } from 'zod'
import { BaseEntity } from '@/shared'

export const UserEntity = BaseEntity.extend({
	name: z.string(),
	image: z.string()
})

export type TUserEntity = z.infer<typeof UserEntity>
