import { Dispatch, SetStateAction } from 'react'
import { useGetCart } from '@/entities/cart'
import { Icon, Typography } from '@/shared'
import { CartInfo } from '../@info'

const { Title } = Typography

export const CartBody = ({
	setIsOpen
}: {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
	const { data } = useGetCart()

	return (
		<div className='p-[50px]'>
			<div className='flex justify-between mb-[20px]'>
				<div className='flex items-end gap-x-[8px]'>
					<Title variant='h3' className=''>
						Корзина
					</Title>
					<span className='text-[35px] font-normal inter block pb-[6px]'>
						({data?.items.length})
					</span>
				</div>
				<Icon
					name='Close'
					className='h-[30px] w-[30px] cursor-pointer p-[5px]'
					onClick={() => {
						setIsOpen(false)
					}}
				/>
			</div>
			<CartInfo />
		</div>
	)
}
