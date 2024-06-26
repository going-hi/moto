import clsx from 'clsx'
import { useMemo } from 'react'
import { useGetCart } from '@/entities/cart'
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
	const { data, isFetching } = useGetCart()
	const { accessToken } = useProfileStore()

	const addedItem = useMemo(
		() => data?.items.find(i => i.product.id === id),
		[data, id]
	)

	const { mutate, isPending } = useToggleCart(addedItem ? 'remove' : 'add')

	return (
		<Button
			variant={
				!accessToken || isPending || isFetching ? 'primary' : variant
			}
			className={clsx(
				'basis-full duration-700 will-change-transform ',
				(isPending || isFetching) && '!py-[20px]',
				!!accessToken && 'dhover:hover:scale-[101%]',
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
			disabled={!accessToken || isPending || isFetching}
			onClick={() =>
				accessToken ? mutate(addedItem ? addedItem.id : id) : {}
			}
			lineClassName={addedItem ? '!bg-black' : 'bg-beige'}
		>
			{isPending || isFetching ? (
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
