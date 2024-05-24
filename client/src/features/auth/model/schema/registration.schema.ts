import { z } from 'zod'

export const RegistrationSchema = z
	.object({
		name: z
			.string({ message: 'Имя должно быть строкой' })
			.min(2, {
				message: 'Минимальная длина имени 2 символа'
			})
			.max(32, { message: 'Максимальная длина имени 32 символа' }),
		surname: z
			.string({ message: 'Фамилия должна быть строкой' })
			.min(2, {
				message: 'Минимальная длина фамилии 2 символа'
			})
			.max(32, { message: 'Максимальная длина фамилии 32 символа' }),
		email: z.string({ message: 'Почта должна быть валидной' }).email({
			message: 'Невалидная почта'
		}),
		password: z
			.string({ message: 'Пароль должен быть строкой' })
			.min(8, { message: 'Минимальная длина пароля 8 символов' })
			.max(32, { message: 'Максимальная длина 32 символа' }),
		confirmPassword: z
			.string({ message: 'Пароль должен быть строкой' })
			.min(8, { message: 'Минимальная длина пароля 8 символов' })
			.max(32, { message: 'Максимальная длина 32 символа' }),
		phone: z
			.string({
				message: 'Телефон должен быть строкой'
			})
			.regex(/^\+7[0-9]{10}$/, {
				message: 'Неверный формат телефона. Пример: +79999999999'
			}),
		confirmRules: z.boolean().refine(val => val, {
			message: 'Согласитесь с условиями'
		})
	})
	.superRefine(({ password, confirmPassword }, ctx) => {
		if (password !== confirmPassword) {
			ctx.addIssue({
				code: 'custom',
				message: 'Пароли не совпадают',
				path: ['confirmPassword']
			})
		}
	})
