import clsx from 'clsx'
import { AddToCartButton } from '@/features/add-to-cart'
import { AddToFavouritesButton } from '@/features/add-to-favourites'
import type { TCard } from '@/entities/card'
import { Typography } from '@/shared'
import { specifications } from '@/shared'
import { CardBodyDelivery } from './@delivery'
import { CardBodyDescription } from './@description'
import { CardBodyPaymentMethod } from './@payment-method'
import { Specifications } from './@specifications'
import cl from './card-body.module.css'

const { Title, Text } = Typography

export const CardBody = ({ name, price, description }: TCard) => {
	return (
		<div
			className={clsx(
				'basis-[50%] bg-beige p-[20px] flex flex-col gap-y-[50px] overflow-y-scroll',
				cl.root
			)}
		>
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
				<AddToFavouritesButton variant='button' isActive={false} />
				<AddToCartButton />
			</div>
			<div>
				<Specifications list={specifications} />
				<CardBodyPaymentMethod />
				<CardBodyDelivery />
			</div>
		</div>
	)
}
