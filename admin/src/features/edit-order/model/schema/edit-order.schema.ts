import { z } from 'zod'

export const EditOrderSchema = z.object({
	status: z.union(
		[
			z.literal('new'),
			z.literal('processed'),
			z.literal('accepted', z.literal('executed'))
		],
		{ message: 'Неверный статус заказа' }
	)
})
