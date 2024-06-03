import { useFormContext } from 'react-hook-form'
import type { TCreateOrder } from '@/entities/order'
import { Typography } from '@/shared'
import { orderFormContactDataItemsArr } from '../../@model'

const { Text } = Typography

export const OrderFormContact = () => {
	const {} = useFormContext<TCreateOrder>()

	return (
		<div>
			<Text className='text-[24px] font-extrabold -tracking-2per mb-[20px] uppercase'>
				Заполните личные данные
			</Text>
			<div className='flex flex-wrap'>
				{orderFormContactDataItemsArr.map(i => (
					<></>
				))}
			</div>
		</div>
	)
}
