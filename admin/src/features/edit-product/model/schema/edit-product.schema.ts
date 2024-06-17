import { z } from 'zod'

export const EditProductSchema = z.object({
	name: z
		.string({ message: 'Название обязательное' })
		.min(1, { message: 'Минимальная длина названия товара 1 символ' })
		.max(3000, {
			message: 'Максимальная длина названия товара 3000 символов'
		}),
	description: z
		.string({ message: 'Описание обязательно' })
		.min(1, { message: 'Минимальная длина описания товара 1 символ' })
		.max(3000, {
			message: 'Максимальная длина описания товара 3000 символов'
		}),
	price: z.preprocess(
		val => +(val as string),
		z.number({ message: 'Цена обязательная' })
	),
	brand: z
		.string({ message: 'Бренд обязателен' })
		.min(1, { message: 'Минимальная длина бренда товара 1 символ' })
		.max(3000, {
			message: 'Максимальная длина бренда товара 3000 символов'
		}),
	category: z.string({ message: 'Категория обязательная' }),
	type: z
		.string({ message: 'Тип должен быть строкой' })
		.min(1, { message: 'Минимальная длина типа товара 1 символ' })
		.max(3000, { message: 'Максимальная длина типа товара 3000 символов' })
		.optional(),
	characteristics: z
		.object(
			{
				key: z
					.string({ message: 'Ключ обязателен' })
					.min(1, {
						message: 'Минимальная длина ключа 1 символ'
					})
					.max(3000, {
						message: 'Максимальная длина ключа 3000 символов'
					}),
				value: z
					.string({ message: 'Значение характеристики обязательно' })
					.min(1, {
						message: 'Минимальная длина значения 1 символ'
					})
					.max(3000, {
						message: 'Максимальная длина значения 3000 символов'
					})
			},
			{ message: 'Массив характеристик обязателен' }
		)
		.array(),
	images: z
		.object({
			url: z.string({ message: 'Url картинки должно быть строкой' }),
			desc: z.string({ message: 'Описание картинки должно быть строкой' })
		})
		.array(),
	newImages: z.unknown().array().optional()
})
