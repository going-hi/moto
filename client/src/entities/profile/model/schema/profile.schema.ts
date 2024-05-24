import { z } from 'zod'

export const ProfileSchema = z.object({
	email: z.string().email(),
	id: z.number(),
	isConfirm: z.boolean(),
	name: z.string(),
	role: z.union([z.literal('owner'), z.literal('admin'), z.literal('user')])
})
