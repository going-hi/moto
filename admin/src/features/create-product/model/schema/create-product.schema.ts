import { z } from 'zod'

export const CreateProductSchema = z.object({
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
			message: 'Максимальная длина описания товара 3000 символа'
		}),
	price: z.preprocess(
		val => +(val as string),
		z.number({ message: 'Цена обязательная' })
	),
	brand: z
		.string({ message: 'Бренд обязателен' })
		.min(1, { message: 'Минимальная длина бренда товара 1 символ' })
		.max(3000, {
			message: 'Максимальная длина бренда товара 3000 символа'
		}),
	category: z.string({ message: 'Категория обязательная' }),
	type: z
		.string({ message: 'Тип должен быть строкой' })
		.min(1, { message: 'Минимальная длина типа товара 1 символ' })
		.max(64, { message: 'Максимальная длина типа товара 64 символа' })
		.optional(),
	characteristics: z
		.object(
			{
				key: z
					.string({ message: 'Ключ обязателен' })
					.min(2, {
						message: 'Минимальная длина ключа 2 символа'
					})
					.max(100, {
						message: 'Максимальная длина ключа 100 символов'
					}),
				value: z
					.string({ message: 'Значение характеристики обязательно' })
					.min(2, {
						message: 'Минимальная длина значения 2 символа'
					})
					.max(150, {
						message: 'Максимальная длина значения 150 символов'
					})
			},
			{ message: 'Массив характеристик обязателен' }
		)
		.array(),
	images: z.unknown({ message: 'Картинки обязательные' }).array()
})
