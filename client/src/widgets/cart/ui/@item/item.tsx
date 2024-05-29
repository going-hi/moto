import { useState } from 'react'
import { CounterCartButton } from '@/features/counter-cart'
import { RemoveFromCardButton } from '@/features/remove-from-cart'
import { Card } from '@/entities/card'
import { TCardCart } from '../../model'
import { CartContext } from '../../model'

export const CartItem = (card: TCardCart) => {
	const [counter, setCounter] = useState<number>(card.count)

	return (
		<Card
			{...card.product}
			count={counter}
			variant='basket'
			BodyComponent={
				<RemoveFromCardButton ctx={CartContext} id={card.id} />
			}
		>
			<CounterCartButton {...card.product} count={counter} />
		</Card>
	)
}
