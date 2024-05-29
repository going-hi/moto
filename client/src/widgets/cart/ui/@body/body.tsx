import { Dispatch, SetStateAction } from 'react'
import { Button, Icon, Typography, cart } from '@/shared'
import { useBasketStore } from '../../model'
import { CartList } from '../@list'

const { Title } = Typography

export const CartBody = ({
	setIsOpen
}: {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
	const { items, total } = useBasketStore()

	return (
		<div className='p-[50px]'>
			<div className='flex justify-between mb-[20px]'>
				<div className='flex items-end gap-x-[8px]'>
					<Title variant='h3' className=''>
						Корзина
					</Title>
					<span className='text-[35px] font-normal inter block pb-[6px]'>
						({items.length})
					</span>
				</div>
				<Icon
					name='Close'
					className='h-[25px] w-[25px] cursor-pointer'
					onClick={() => {
						setIsOpen(false)
					}}
				/>
			</div>
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
				<Button variant='primary'>ПЕРЕЙТИ К ОФОРМЛЕНИЮ</Button>
			</div>
		</div>
	)
}
