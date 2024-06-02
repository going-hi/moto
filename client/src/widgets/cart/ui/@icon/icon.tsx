import { Dispatch, SetStateAction } from 'react'
import { useCartStore } from '@/entities/cart'
import { useProfileStore } from '@/entities/profile'
import { IconBadge, Icon } from '@/shared'

export const CartIcon = ({
	isOpen,
	setIsOpen
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
	const { accessToken } = useProfileStore()
	const {
		isLoading,
		data: { items }
	} = useCartStore()

	if (!accessToken) {
		return <></>
	}

	console.log('cart', items)

	return isLoading ? (
		<IconBadge name='Cart' color='white'>
			<Icon
				className='w-[15px] h-[15px] animate-spin-1000'
				name='Loading'
			/>
		</IconBadge>
	) : (
		<IconBadge
			onClick={() => setIsOpen(!isOpen)}
			color='white'
			name='Cart'
			count={items.length}
			className='cursor-pointer dhover:hover:scale-125 duration-700 self-start'
		/>
	)
}
