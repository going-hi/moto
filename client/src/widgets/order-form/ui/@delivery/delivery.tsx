import { useFormContext, Controller } from 'react-hook-form'
import { Input, Typography } from '@/shared'
import { orderFormDeliveryDataItemsArr } from '../../model'
import { OrderFormRadio } from '../@radio'

const { Text } = Typography

export const OrderFormDelivery = () => {
	const { control } = useFormContext()

	return (
		<div className='mb-[50px]'>
			<div className='mb-[50px]'>
				<Text className='text-[24px] font-extrabold -tracking-2per mb-[20px] uppercase'>
					Выберите способ доставки
				</Text>
				<OrderFormRadio name='shippingMethod' className='mb-[10px]'>
					Самовывоз
				</OrderFormRadio>
				<OrderFormRadio name='shippingMethod'>Доставка</OrderFormRadio>
			</div>
			<div className='flex flex-wrap gap-[20px]'>
				{orderFormDeliveryDataItemsArr.map(i => (
					<Controller
						name={i.name}
						key={i.name}
						control={control}
						render={({ field }) => (
							<Input
								variant='order'
								{...i}
								{...field}
								className='basis-[48.8%]'
							/>
						)}
					/>
				))}
			</div>
		</div>
	)
}
