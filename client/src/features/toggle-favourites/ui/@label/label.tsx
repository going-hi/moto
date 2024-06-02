import clsx from 'clsx'
import { useMemo } from 'react'
import { useGetFavourites } from '@/entities/favourites'
import { useProfileStore } from '@/entities/profile'
import { Button, Icon } from '@/shared'
import { useToggleFavourites } from '../../libs'

export const ToggleFavouritesLabel = ({
	className,
	id
}: {
	className?: string
	id: number
}) => {
	const { isLoading: isFavouritesLoading, data } = useGetFavourites()
	const { accessToken } = useProfileStore()

	const favouritesItem = useMemo(
		() => data?.items.find(i => i.product.id === id),
		[data, id]
	)

	const { isPending, mutate } = useToggleFavourites(
		favouritesItem ? 'remove' : 'add'
	)

	const isLoading = isPending || isFavouritesLoading

	if (!accessToken) {
		return <></>
	}

	if (isLoading) {
		return (
			<Icon
				name='Loading'
				color='black'
				className={clsx(
					className,
					'w-[30px] h-[30px] !p-0 animate-spin-1000 top-[40px] right-[40px]'
				)}
			/>
		)
	}

	return (
		<Button
			iconName={
				isLoading ? 'Loading' : favouritesItem ? 'FullHeart' : 'Heart'
			}
			variant='icon'
			color='black'
			className={clsx('p-[20px]', className)}
			bodyClassName={clsx(
				'dhover:group-hover:scale-105 duration-700',
				isLoading && 'animate-spin-1000 w-[28px] h-[28px]'
			)}
			disabled={isLoading}
			onClick={() =>
				favouritesItem
					? mutate({ id: favouritesItem.id })
					: mutate({ product: id })
			}
		/>
	)
}
