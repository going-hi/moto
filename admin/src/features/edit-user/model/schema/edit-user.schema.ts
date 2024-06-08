import { z } from 'zod'

export const EditUserSchema = z.object({
	role: z.union([z.literal('admin'), z.literal('user')], {
		message: 'Невалидная роль'
	})
})
