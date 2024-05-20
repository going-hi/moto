import type { TCard } from '@/entities/card'
import { Button, Typography } from '@/shared'
import { CardBodyDelivery } from '../@delivery'
import { CardBodyDescription } from '../@description'
import { CardBodyPaymentMethod } from '../@payment-method'

const { Title, Text } = Typography

export const CardBodyInfo = ({ name, price, description }: TCard) => {
	return (
		<div className='basis-[50%] bg-beige p-[20px] flex flex-col gap-y-[50px]'>
			<div className='relative after:content-[""] after:w-full after:h-[1px] after:bottom-0 after:left-0 after:bg-black after:absolute pb-[20px]'>
				<Title variant='h2' className='leading-[100px]'>
					{name}
				</Title>
				<Text className='font-extrabold text-[24px] -tracking-2per'>
					{price} ₽
				</Text>
			</div>
			<CardBodyDescription description={description} />
			<div className='flex gap-x-[15px]'>
				<Button
					iconName='Heart'
					variant='icon'
					color='white'
					className='bg-black p-[20px] group dhover:hover:scale-105 duration-700'
					bodyClassName='dhover:group-hover:scale-105 duration-700'
				/>
				<Button
					variant='parentheses-button'
					className='h-full basis-[100%] dhover:hover:scale-[101%] duration-700'
					isMain
				>
					ДОБАВИТЬ В КОРЗИНУ
				</Button>
			</div>
			<div>
				<CardBodyPaymentMethod />
				<CardBodyDelivery />
			</div>
		</div>
	)
}
