import { z } from 'zod'

export const EditPasswordSchema = z
	.object({
		password: z
			.string()
			.min(8, { message: 'Минимальная длина пароля 8 символов' })
			.max(32, { message: 'Максимальная длина пароля 32 символа' }),
		newPassword: z
			.string()
			.min(8, { message: 'Минимальная длина пароля 8 символов' })
			.max(32, { message: 'Максимальная длина пароля 32 символа' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Минимальная длина пароля 8 символов' })
			.max(32, { message: 'Максимальная длина пароля 32 символа' })
	})
	.superRefine(({ newPassword, confirmPassword }, ctx) => {
		console.log(
			newPassword,
			confirmPassword,
			newPassword !== confirmPassword
		)
		if (newPassword !== confirmPassword) {
			ctx.addIssue({
				code: 'custom',
				message: 'Пароли не совпадают',
				path: ['confirmPassword']
			})
		}
	})
