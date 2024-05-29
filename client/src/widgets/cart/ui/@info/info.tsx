import { cart, Typography } from '@/shared'
import { Button } from '@/shared'
import { useCartStore } from '../../model'
import { CartList } from '../@list'

const { Title } = Typography

export const CartInfo = () => {
	const { total } = useCartStore()
	return (
		<>
			<CartList list={cart} />
			<div className='pr-[20px]'>
				<div className='flex justify-between items-center after:w-full after:h-[2px] after:content-[""] after:bg-gray-medium relative after:absolute after:bottom-0 after:left-0 mb-[50px]'>
					<Title variant='h4'>ИТОГО</Title>
					<Title variant='h4'>
						{total}
						<span className='text-[38px] ml-[3px] font-normal'>
							₽
						</span>
					</Title>
				</div>
				<Button className='py-[19px]' variant='primary'>
					ПЕРЕЙТИ К ОФОРМЛЕНИЮ
				</Button>
			</div>
		</>
	)
}
