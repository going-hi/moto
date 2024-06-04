import { useGetCart } from '@/entities/cart'

import { Typography } from '@/shared'
import { OrderCartList } from './@list'
import { OrderCartModal } from './@modal'

const { Title, Text } = Typography

export const OrderCart = () => {
	const { data, isLoading } = useGetCart()

	return (
		<>
			<OrderCartModal />
			<section className='basis-[42%] px-[20px] relative before:content-[""] before:top-0 before:left-0 before:bg-[#9F9C91] before:w-[1px] before:h-full before:absolute'>
				<div className='flex items-end pb-[20px] before:content-[""] before:bg-[#9F9C91] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-[calc(100%-44px)] relative'>
					<Title variant='h3' className='text-[70px]'>
						Корзина
					</Title>
					<span className='text-[35px] pb-[7px] ml-[8px]'>
						({isLoading ? '0' : data?.items.length})
					</span>
				</div>
				<OrderCartList
					list={isLoading ? [...new Array(5)] : data?.items ?? []}
				/>
				<div className='flex justify-between items-center py-[25px]'>
					<Text className='text-[40px] font-bold -tracking-2per bebas'>
						ИТОГО
					</Text>
					<div className='flex items-center'>
						<Text className='text-[40px] font-bold -tracking-2per bebas'>
							{data?.meta.totalPrice}
						</Text>
						<span className='text-[35px] font-bold bebas pt-[5px] ml-[5px]'>
							₽
						</span>
					</div>
				</div>
			</section>
		</>
	)
}
