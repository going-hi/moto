import { useGetCart } from '@/entities/cart'
import { Typography, Button } from '@/shared'
import { CartEmpty } from '../@empty'
import { CartList } from '../@list'

const { Title } = Typography

export const CartInfo = () => {
	const { data, isLoading } = useGetCart()

	if (!isLoading && !data?.items.length) {
		return <CartEmpty />
	}

	return (
		<>
			<CartList
				list={isLoading ? [...new Array(2)] : data?.items ?? []}
			/>
			<div className='pr-[20px]'>
				<div className='flex justify-between items-center after:w-full after:h-[2px] after:content-[""] after:bg-gray-medium relative after:absolute after:bottom-0 after:left-0 mb-[50px]'>
					<Title variant='h4'>ИТОГО</Title>
					<Title variant='h4'>
						{data?.meta?.totalPrice}
						<span className='text-[38px] ml-[3px] font-normal'>
							₽
						</span>
					</Title>
				</div>
				<Button
					variant='primary'
					path='/create-order'
					className='py-[19px]'
				>
					ПЕРЕЙТИ К ОФОРМЛЕНИЮ
				</Button>
			</div>
		</>
	)
}
