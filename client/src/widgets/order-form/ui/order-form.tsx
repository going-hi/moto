import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { ConfirmRules } from '@/features/confirm-rules'
import { CreateOrderSchema, TCreateOrder } from '@/entities/order'
import { Button, Typography } from '@/shared'
import { OrderFormContact } from './@contact'
import { OrderFormDelivery } from './@delivery'
import { OrderFormRadio } from './@radio'

const { Text } = Typography

export const OrderForm = () => {
	const form = useForm<TCreateOrder>({
		defaultValues: {
			paymentMethod: 'by_card',
			shippingMethod: 'pickup',
			confirmRules: false
		},
		resolver: zodResolver(CreateOrderSchema)
	})

	const { handleSubmit, control } = form

	const onSubmit = (data: TCreateOrder) => {
		console.log(data)
	}

	return (
		<FormProvider {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='text-[18px] font-medium basis-[50%] -tracking-2per'
			>
				<div className='mb-[50px]'>
					<Text className='text-[24px] font-extrabold -tracking-2per mb-[20px] uppercase'>
						Выберите способ оплаты
					</Text>
					<Controller
						name='paymentMethod'
						control={control}
						render={({ field }) => (
							<OrderFormRadio
								className='mb-[10px]'
								{...field}
								name='paymentMethod'
								value='by_card'
							>
								Банковской картой при получении
							</OrderFormRadio>
						)}
					/>
					<Controller
						name='paymentMethod'
						control={control}
						render={({ field }) => (
							<OrderFormRadio
								{...field}
								name='paymentMethod'
								value='by_cash'
							>
								Наличными
							</OrderFormRadio>
						)}
					/>
				</div>
				<OrderFormDelivery />
				<OrderFormContact />
				<Controller
					name='confirmRules'
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
