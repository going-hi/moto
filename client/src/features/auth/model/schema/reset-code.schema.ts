import { z } from 'zod'

export const ResetCodeSchema = z.object({
	email: z.string({ message: 'Почта должна быть строкой' }).email({
		message: 'Невалидная почта'
	}),
	code: z.number({ message: 'Код подтверждения должен быть числом' })
})
