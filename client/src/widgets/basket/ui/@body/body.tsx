import { Dispatch, SetStateAction } from 'react'
import { Icon, Typography } from '@/shared'
import { useBasketStore } from '../../model'

const { Title } = Typography

export const BasketBody = ({
	setIsOpen
}: {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
	const { items } = useBasketStore()

	return (
		<div className='p-[50px]'>
			<div className='flex justify-between'>
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
		</div>
	)
}
