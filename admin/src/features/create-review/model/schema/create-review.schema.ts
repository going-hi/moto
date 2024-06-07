import { z } from 'zod'

export const CreateReviewSchema = z.object({
	name: z.string({ message: 'Имя покупателя обязательно' }),
	product: z.number({ message: 'Продукт обязателен' }),
	text: z.string({ message: 'Текст отзыва обязателен' })
})
