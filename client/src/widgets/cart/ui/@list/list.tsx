import clsx from 'clsx'
import { useGetCart, type TCardCart } from '@/entities/cart'
import { CartItem } from '../@item'
import { CartItemSkeleton } from '../@item-skeleton'

export const CartList = ({ list }: { list: TCardCart[] }) => {
	const { isLoading } = useGetCart()

	if (!list) {
		return <></>
	}

	return (
		<div className='after:w-[calc(100%-24px)] after:h-[2px] after:content-[""] after:bg-gray-medium after:absolute after:bottom-0 after:left-0 relative mb-[30px] '>
			<ul
				className={clsx(
					'h-[calc(100dvh-100px-50px-20px-180px-30px-20px)] pr-[20px]',
					isLoading ? 'overflow-hidden' : 'overflow-y-auto'
				)}
			>
				{list.map((i, index) =>
					i ? (
						<CartItem {...i} key={i.id} />
					) : (
						<CartItemSkeleton key={String(index)} />
					)
				)}
			</ul>
		</div>
	)
}
