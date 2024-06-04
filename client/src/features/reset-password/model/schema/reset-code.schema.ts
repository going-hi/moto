import { z } from 'zod'

export const ResetCodeSchema = z.object({
	email: z.string({ message: 'Почта должна быть строкой' }).email({
		message: 'Невалидная почта'
	}),
	code: z.preprocess(
		z => Number(z),
		z
			.number({ message: 'Код подтверждения должен быть числом' })
			.min(100000, { message: 'Минимальное значение 100000' })
			.max(999999, { message: 'Максимальное значение 999999' })
	)
})
