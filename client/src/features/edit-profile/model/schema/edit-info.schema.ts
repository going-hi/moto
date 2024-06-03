import { z } from 'zod'

export const EditInfoSchema = z.object({
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
	phone: z
		.string({
			message: 'Телефон должен быть строкой'
		})
		.regex(/^\+7[0-9]{10}$/, {
			message: 'Неверный формат телефона. Пример: +79999999999'
		})
})
