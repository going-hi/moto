import { z } from 'zod'

export const EditReviewSchema = z.object({
	name: z.string({ message: 'Имя покупателя обязательно' }),
	product: z.number({ message: 'Продукт обязателен' }),
	text: z.string({ message: 'Текст отзыва обязателен' })
})
