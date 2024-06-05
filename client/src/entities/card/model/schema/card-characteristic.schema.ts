import { z } from 'zod'
import { BaseSchema } from '@/shared'

export const CardCharacteristicSchema = BaseSchema.extend({
	key: z.string(),
	value: z.string()
})
