import { $api } from '@/shared'

export const addToCart = (id: number) =>
	$api.post('/basket', { product: id, count: 1 })
