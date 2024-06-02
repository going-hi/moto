import clsx from 'clsx'
import { useMemo } from 'react'
import { useGetFavourites } from '@/entities/favourites'
import { useProfileStore } from '@/entities/profile'
import { Button } from '@/shared'
import { useToggleFavourites } from '../../libs'

export const ToggleFavouritesButton = ({
	className,
	id
}: {
	className?: string
	id: number
}) => {
	const { data, isLoading: isFavouritesLoading } = useGetFavourites()

	const { accessToken } = useProfileStore()

	const favouritesItem = useMemo(
		() => data?.items.find(i => i.product.id === id),
		[data, id]
	)

	const { mutate, isPending } = useToggleFavourites(
		favouritesItem ? 'remove' : 'add'
	)

	const isLoading = isPending || isFavouritesLoading

	return (
		<Button
			iconName={
				isLoading ? 'Loading' : favouritesItem ? 'FullHeart' : 'Heart'
			}
			variant='icon'
			color={favouritesItem ? '#000' : '#D8CDC5'}
			className={clsx(
				'group duration-700 aspect-square h-full will-change-transform',
				className,
				favouritesItem ? 'bg-beige border-black border' : 'bg-black',
				!isLoading && !!accessToken && 'dhover:hover:scale-105'
			)}
			bodyClassName={clsx(
				'duration-700',
				!isLoading && !!accessToken && 'dhover:hover:scale-105',
				isLoading && 'animate-spin-1000 w-[28px] h-[28px]'
			)}
			disabled={!accessToken || isLoading}
			onClick={() =>
				favouritesItem
					? mutate({ id: favouritesItem.id })
					: mutate({ product: id })
			}
		/>
	)
}
