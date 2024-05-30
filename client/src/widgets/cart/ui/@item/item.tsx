import { useState } from 'react'
import { CounterCartButton } from '@/features/counter-cart'
import { RemoveFromCartButton } from '@/features/remove-from-cart'
import { Card } from '@/entities/card'
import { type TCardCart, useCartStore } from '@/entities/cart'

export const CartItem = (card: TCardCart) => {
	const [count, setCount] = useState<number>(card.count)
	const { isLoading } = useCartStore()

	return isLoading ? (
		<></>
	) : (
		<Card
			{...card.product}
			count={count}
			variant='basket'
			BodyComponent={<RemoveFromCartButton id={card?.id} />}
		>
			<CounterCartButton
				{...card.product}
				id={card.id}
				count={count}
				setCount={setCount}
			/>
		</Card>
	)
}
