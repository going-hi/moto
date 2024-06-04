import { Controller, useFormContext } from 'react-hook-form'
import type { TCreateOrder } from '@/entities/order'
import { Input, Typography } from '@/shared'
import { orderFormContactDataItemsArr } from '../../model'

const { Text } = Typography

export const OrderFormContact = () => {
	const { control } = useFormContext<TCreateOrder>()

	return (
		<div className='mb-[20px]'>
			<Text className='text-[24px] font-extrabold -tracking-2per mb-[20px] uppercase'>
				Заполните личные данные
			</Text>
			<div className='flex flex-wrap gap-[20px]'>
				{orderFormContactDataItemsArr.map(i => (
					<Controller
						name={i.name}
						key={i.name}
						control={control}
						render={({ field }) => (
							<Input
								variant='order'
								{...i}
								{...field}
								// @ts-expect-error only string
								value={field.value ?? ''}
								className='basis-[48.8%]'
							/>
						)}
					/>
				))}
			</div>
		</div>
	)
}
