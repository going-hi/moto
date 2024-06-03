import { z } from 'zod'

export const ShippingMethod = z.union([
	z.literal('pickup'),
	z.literal('delivery')
])

export type TShippingMethod = z.infer<typeof ShippingMethod>

export const shippingMethodMap = {
	pickup: 'Самовывоз',
	delivery: 'Доставка'
}
