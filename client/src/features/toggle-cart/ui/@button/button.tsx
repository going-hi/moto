import clsx from 'clsx'
import { useMemo } from 'react'
import { useCartStore } from '@/entities/cart'
import { useProfileStore } from '@/entities/profile'
import { Button, Icon } from '@/shared'
import { useToggleCart } from '../../libs'

export const ToggleCartButton = ({
	id,
	variant,
	className
}: {
	id: number
	variant: 'primary' | 'parentheses-button'
	className?: string
}) => {
	const {
		data: { items },
		isLoading
	} = useCartStore()

	const { accessToken } = useProfileStore()

	const addedItem = useMemo(
		() => items.find(i => i.product.id === id),
		[items, id]
	)

	const { mutate, isPending } = useToggleCart(addedItem ? 'remove' : 'add')

	return (
		<Button
			variant={isPending || isLoading ? 'primary' : variant}
			className={clsx(
				'basis-full duration-700 will-change-transform ',
				isPending || isLoading
					? '!py-[20px]'
					: 'dhover:hover:scale-[101%]',
				variant === 'primary' && 'max-h-[66px] !py-[20px]',
				className
			)}
			bodyClassName={clsx(
				'py-[21px] max-h-[66px]',
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
