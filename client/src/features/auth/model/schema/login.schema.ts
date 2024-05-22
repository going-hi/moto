import { z } from 'zod'

export const LoginSchema = z.object({
	email: z
		.string({ message: 'Почта должна быть строкой' })
		.email({ message: 'Невалидная почта' }),
	password: z
		.string({ message: 'Пароль должен быть строкой' })
		.min(8, { message: 'Минимальная длина пароля 8 символов' })
		.max(32, { message: 'Максимальная длина пароля 32 символа' })
})
