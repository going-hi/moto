import { z } from 'zod'

export const ResetEmailSchema = z.object({
	email: z.string({ message: 'Почта должна быть строкой' }).email({
		message: 'Невалидная почта'
	})
})
