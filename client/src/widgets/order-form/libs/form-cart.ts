import type { TCreateOrderProductItem } from '@/features/create-order'
import type { TGetCartDto } from '@/entities/cart'

export const formatCart = (card?: TGetCartDto): TCreateOrderProductItem[] =>
	(card?.items ?? []).map(i => ({
		id: i.product.id,
		count: i.count
	}))
