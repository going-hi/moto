import { Link } from 'react-router-dom'
import { type TOrder, Order } from '@/entities/order'
import { Typography } from '@/shared'
import { MyOrdersItemSkeleton } from '../@item-skeleton'

const { Text } = Typography

export const MyOrdersList = ({ list }: { list: TOrder[] }) => {
	if (!list.length) {
		return (
			<div className='font-medium text-[20px]'>
				<Text className='mb-[10px]'>Здесь будут ваши покупки!</Text>
				<Text>
					Загляните в
					<Link className='underline font-bold' to='/catalog'>
						каталог
					</Link>
					, чтобы выбрать товары
				</Text>
			</div>
		)
	}

	return (
		<ul className='flex flex-col gap-y-[20px]'>
			{list.map((i, index) =>
				i ? (
					<Order {...i} key={i.id} />
				) : (
					<MyOrdersItemSkeleton key={String(index)} />
				)
			)}
		</ul>
	)
}
