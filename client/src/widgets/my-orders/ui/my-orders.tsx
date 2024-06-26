import { useEffect } from 'react'
import { useGetOrders } from '@/entities/order/libs'
import { Typography } from '@/shared'
import { MyOrdersList } from './@list'

const { Title } = Typography

export const MyOrders = () => {
	const { data, isLoading } = useGetOrders()

	useEffect(() => {
		window.scroll(0, 0)
	}, [])
	return (
		<section>
			<Title variant='h5' className='-tracking-2per mb-[20px]'>
				ЗАКАЗЫ
			</Title>
			<MyOrdersList
				list={isLoading ? [...new Array(2)] : data?.items ?? []}
			/>
		</section>
	)
}
