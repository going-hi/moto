import clsx from 'clsx'
import { useMemo } from 'react'
import { useAuthStore } from '@/features/auth-user'
import { useCartStore } from '@/entities/cart'
import { Button, Icon } from '@/shared'
import { useToggleCart } from '../../libs'

export const ToggleCartButton = ({ id }: { id: number }) => {
	const {
		data: { items },
		isLoading
	} = useCartStore()

	const { accessToken } = useAuthStore()

	const addedItem = useMemo(
		() => items.find(i => i.product.id === id),
		[items, id]
	)

	const { mutate, isPending } = useToggleCart(addedItem ? 'remove' : 'add')

	return (
		<Button
			variant={isPending || isLoading ? 'primary' : 'parentheses-button'}
			className={clsx(
				'h-full basis-[100%] duration-700 will-change-transform',
				isPending || isLoading
					? '!py-[20px]'
					: 'dhover:hover:scale-[101%]'
			)}
			bodyClassName={clsx(
				addedItem
					? `!bg-beige border-black border !text-black`
					: `!bg-black `
			)}
			isMain
			disabled={isPending || isLoading}
			onClick={() =>
				accessToken ? mutate(addedItem ? addedItem.id : id) : {}
			}
			lineClassName={addedItem ? '!bg-black' : 'bg-beige'}
		>
			{isPending || isLoading ? (
				<Icon
					name='Loading'
					className='w-[25px] h-[25px] animate-spin-1000'
				/>
			) : addedItem ? (
				'УДАЛИТЬ ИЗ КОРЗИНЫ'
			) : (
				'ДОБАВИТЬ В КОРЗИНУ'
			)}
		</Button>
	)
}
