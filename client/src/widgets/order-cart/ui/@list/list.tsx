import { TCardCart } from '@/entities/cart'
import { OrderCartItem } from '../@item'
import { OrderCartItemSkeleton } from '../@item-skeleton'

export const OrderCartList = ({ list }: { list: TCardCart[] }) => {
	return (
		<div className='after:content-[""] relative after:bg-[#9F9C91] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[calc(100%-44px)]'>
			<ul className='h-[870px] overflow-auto relative  pr-[40px]'>
				{list.map((i, index) =>
					i ? (
						<OrderCartItem {...i} key={i.id} />
					) : (
						<OrderCartItemSkeleton key={String(index)} />
					)
				)}
			</ul>
		</div>
	)
}
