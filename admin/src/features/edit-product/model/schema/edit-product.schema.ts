import { z } from 'zod'

export const EditProductSchema = z.object({
	name: z
		.string({ message: 'Название обязательное' })
		.min(2, { message: 'Минимальная длина названия товара 2 символа' })
		.max(200, {
			message: 'Максимальная длина названия товара 200 символов'
		}),
	description: z
		.string({ message: 'Описание обязательно' })
		.min(2, { message: 'Минимальная длина описания товара 2 символа' })
		.max(256, {
			message: 'Максимальная длина описания товара 256 символа'
		}),
	price: z.preprocess(
		val => +(val as string),
		z.number({ message: 'Цена обязательная' })
	),
	brand: z
		.string({ message: 'Бренд обязателен' })
		.min(2, { message: 'Минимальная длина бренда товара 2 символа' })
		.max(64, { message: 'Максимальная длина бренда товара 64 символа' }),
	category: z.string({ message: 'Категория обязательная' }),
	type: z
		.string({ message: 'Тип должен быть строкой' })
		.min(2, { message: 'Минимальная длина типа товара 2 символа' })
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
	images: z.string({ message: 'Изображение должно быть строкой' }).array(),
	newImages: z.unknown().array()
})
