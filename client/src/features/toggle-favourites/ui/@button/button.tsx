import clsx from 'clsx'
import { useMemo } from 'react'
import { useFavouritesStore } from '@/entities/favourites'
import { Button } from '@/shared'
import { useAddToFavourites, useRemoveFromFavourites } from '../../libs'

export const ToggleFavouritesButton = ({
	className,
	id
}: {
	className?: string
	id: number
}) => {
	const {
		isLoading: isFavouritesLoading,
		data: { items }
	} = useFavouritesStore()

	const { isPending: isAddPending, mutate: add } = useAddToFavourites()
	const { isPending: isRemovePending, mutate: remove } =
		useRemoveFromFavourites()

	const isLoading = isAddPending || isRemovePending || isFavouritesLoading

	const favouritesItem = useMemo(
		() => items.find(i => i.product.id === id),
		[items, id]
	)

	return (
		<Button
			iconName={
				isLoading ? 'Loading' : favouritesItem ? 'FullHeart' : 'Heart'
			}
			variant='icon'
			color={favouritesItem ? '#000' : '#D8CDC5'}
			className={clsx(
				'group dhover:hover:scale-105 duration-700 aspect-square h-full will-change-transform',
				className,
				favouritesItem ? 'bg-beige border-black border' : 'bg-black'
			)}
			bodyClassName={clsx(
				'dhover:group-hover:scale-105 duration-700',
				isLoading && 'animate-spin-1000 w-[28px] h-[28px]'
			)}
			disabled={isLoading}
			onClick={() =>
				favouritesItem
					? remove({ id: favouritesItem.id })
					: add({ product: id })
			}
		/>
	)
}
