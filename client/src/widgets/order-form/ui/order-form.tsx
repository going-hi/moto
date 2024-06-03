import { Controller, FormProvider, useForm } from 'react-hook-form'
import { ConfirmRules } from '@/features/confirm-rules'
import { TCreateOrder } from '@/entities/order'
import { Button, Typography } from '@/shared'
import { OrderFormContact } from './@contact'
import { OrderFormRadio } from './@radio'

const { Text } = Typography

export const OrderForm = () => {
	const form = useForm<TCreateOrder>()

	const { handleSubmit, control } = form

	const onSubmit = () => {}

	return (
		<FormProvider {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='text-[18px] font-medium basis-[50%]'
			>
				<div className='mb-[50px]'>
					<Text className='text-[24px] font-extrabold -tracking-2per mb-[20px] uppercase'>
						Выберите способ оплаты
					</Text>
					<OrderFormRadio name='paymentMethod' className='mb-[10px]'>
						Банковской картой при получении
					</OrderFormRadio>
					<OrderFormRadio name='paymentMethod'>
						Наличными
					</OrderFormRadio>
				</div>
				<div className='mb-[50px]'>
					<Text className='text-[24px] font-extrabold -tracking-2per mb-[20px] uppercase'>
						Выберите способ доставки
					</Text>
					<OrderFormRadio name='shippingMethod' className='mb-[10px]'>
						Самовывоз
					</OrderFormRadio>
					<OrderFormRadio name='shippingMethod'>
						Доставка
					</OrderFormRadio>
				</div>
				<OrderFormContact />
				<Controller
					name={'confirmRules'}
					control={control}
					render={({ field }) => (
						<ConfirmRules field={field} className='mb-[30px]' />
					)}
				/>
				<Button variant='primary' className='uppercase !py-[16px]'>
					Оформить заказ
				</Button>
			</form>
		</FormProvider>
	)
}
