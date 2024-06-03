import { z } from 'zod'
export const PaymentMethod = z.union([
	z.literal('by_card'),
	z.literal('in_cash')
])

export type TPaymentMethod = z.infer<typeof PaymentMethod>

export const paymentMethodMap = {
	by_card: 'Оплата картой',
	in_cash: 'Оплата наличными'
}
