import { Card } from '@/entities/card'
import { TCardCart } from '@/entities/cart'
import { Typography } from '@/shared'

const { Text } = Typography

export const OrderCartItem = (card: TCardCart) => {
	return (
		<Card
			{...card.product}
			variant='basket'
			price={card.count * card.product.price}
			className='first:before:h-0 last:after:h-0 py-[21px]'
		>
			<div className='flex items-center text-[16px] font-medium -tracking-2per -mt-[20px]'>
				<Text>Количество:</Text>
				<span className='ml-[5px]'>{card.count}</span>
			</div>
		</Card>
	)
}
