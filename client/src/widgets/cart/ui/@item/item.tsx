import { useState } from 'react'
import { CounterCartButton } from '@/features/counter-cart'
import { RemoveFromCartButton } from '@/features/remove-from-cart'
import { Card } from '@/entities/card'
import type { TCardCart } from '@/entities/cart'

export const CartItem = (card: TCardCart) => {
	const [counter, setCounter] = useState<number>(card.count)

	return (
		<Card
			{...card.product}
			count={counter}
			variant='basket'
			BodyComponent={<RemoveFromCartButton id={card.id} />}
		>
			<CounterCartButton {...card.product} count={counter} />
		</Card>
	)
}
