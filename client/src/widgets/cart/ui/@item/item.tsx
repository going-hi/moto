import { useState } from 'react'
import { CounterCartButton } from '@/features/counter-cart'
import { RemoveFromCardButton } from '@/features/remove-from-cart'
import { Card } from '@/entities/card'
import { TCardCart } from '../../model'

export const CartItem = (card: TCardCart) => {
	const [counter, setCounter] = useState<number>(card.count)

	console.log(card.product.images)

	return (
		<Card
			{...card.product}
			count={counter}
			variant='basket'
			BodyComponent={RemoveFromCardButton}
		>
			<CounterCartButton {...card.product} count={counter} />
		</Card>
	)
}
