import { z } from 'zod'
import { CardCartSchema } from '@/entities/cart'
import { BaseSchema } from '@/shared'
import { PaymentMethod, ShippingMethod, OrderStatus } from '../../consts'

export const OrderSchema = BaseSchema.extend({
	name: z.string(),
	surname: z.string(),
	patronymic: z.string().nullable(),
	email: z.string().nullable(),
	phone: z.string(),
	postIndex: z.string().nullable(),
	region: z.string().nullable(),
	city: z.string().nullable(),
	flat: z.string().nullable(),
	district: z.string().nullable(),
	street: z.string().nullable(),
	home: z.string().nullable(),
	paymentMethod: z.lazy(() => PaymentMethod),
	shippingMethod: z.lazy(() => ShippingMethod),
	total: z.number(),
	status: z.lazy(() => OrderStatus),
	items: z.array(z.lazy(() => CardCartSchema))
})
