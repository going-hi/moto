import { z } from 'zod'
import { PaymentMethod, ShippingMethod } from '../../consts'

export const CreateOrderSchema = z.object({
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
	patronymic: z
		.string({ message: 'Отчество должно быть строкой' })
		.optional(),
	phone: z
		.string({
			message: 'Телефон должен быть строкой'
		})
		.regex(/^\+7[0-9]{10}$/, {
			message: 'Неверный формат телефона. Пример: +79999999999'
		}),
	postIndex: z
		.string({
			message: 'Почтовый индекс должен быть строкой'
		})
		.optional(),
	region: z
		.string({
			message: 'Регион должен быть строкой'
		})
		.optional(),
	city: z
		.string({
			message: 'Город должен быть строкой'
		})
		.optional(),
	flat: z
		.string({
			message: 'Квартира должна быть строкой'
		})
		.optional(),
	district: z
		.string({
			message: 'Район должен быть строкой'
		})
		.optional(),
	street: z
		.string({
			message: 'Улица должна быть строкой'
		})
		.optional(),
	home: z
		.string({
			message: 'Дом должен быть строкой'
		})
		.optional(),
	paymentMethod: z.lazy(() => PaymentMethod),
	shippingMethod: z.lazy(() => ShippingMethod),
	confirmRules: z.boolean().refine(val => val, {
		message: 'Согласитесь с условиями'
	})
})
