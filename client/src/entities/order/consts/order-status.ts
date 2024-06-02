import { z } from 'zod'

export const OrderStatus = z.union([
	z.literal('new'),
	z.literal('processed'),
	z.literal('accepted'),
	z.literal('executed')
])

export type TOrderStatus = z.infer<typeof OrderStatus>

export const orderStatusesMap = {
	new: 'Новый',
	processed: 'В обработке',
	accepted: 'Принят',
	executed: 'Отменен'
}
