import { Image, Typography } from '@/shared'
import {
	paymentMethodMap,
	shippingMethodMap,
	orderStatusesMap
} from '../consts'
import { formatDate } from '../libs'
import type { TOrder } from '../model'

const { Text, Title } = Typography

export const Order = ({
	total,
	items,
	status,
	paymentMethod,
	shippingMethod,
	id,
	createDate
}: TOrder) => {
	const {
		product: { images, name }
	} = items[0]

	return (
		<li className='border border-black p-[30px]'>
			<div className='flex justify-between relative after:absolute after:bottom-0 after:left-0 after:content-[""] after:w-full after:h-[1px] after:bg-[#C3BEB2] pb-[15px] mb-[20px]'>
				<div className='flex gap-x-[20px]'>
					<div className='w-[180px] relative pb-[90px]'>
						<Image
							src={images[0]}
							alt={name}
							className='absolute top-0 left-0 h-full object-contain'
						/>
					</div>
					<div className='flex flex-col justify-between'>
						<Title variant='h5' className='uppercase font-medium'>
							ЗАКАЗ №{id} от {formatDate(createDate)}
						</Title>
						<Text className='text-[18px] font-medium'>
							{orderStatusesMap[status]}
						</Text>
					</div>
				</div>
				<Text className='text-[24px] font-medium'>
					{total}
					<span className='ml-[5px]'>₽</span>
				</Text>
			</div>
			<div className='flex gap-x-[10px] items-center'>
				<Text className='text-[18px] -tracking-2per text-[#43413D] font-medium'>
					{paymentMethodMap[paymentMethod]}
				</Text>
				<span className='text-[12px] text-[#43413D] font-medium'>
					|
				</span>
				<Text className='text-[18px] -tracking-2per text-[#43413D] font-medium'>
					{shippingMethodMap[shippingMethod]}
				</Text>
			</div>
		</li>
	)
}
