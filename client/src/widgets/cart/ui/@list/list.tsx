import { TCardCart } from '../../model'
import { CartItem } from '../@item'

export const CartList = ({ list }: { list: TCardCart[] }) => {
	return (
		<div className='after:w-[calc(100%-24px)] after:h-[2px] after:content-[""] after:bg-gray-medium after:absolute after:bottom-0 after:left-0 relative mb-[30px] '>
			<ul className='h-[calc(100dvh-100px-50px-20px-180px-30px-20px)] overflow-y-scroll pr-[20px]'>
				{list.map(i => (
					<CartItem {...i} key={i.id} />
				))}
			</ul>
		</div>
	)
}
