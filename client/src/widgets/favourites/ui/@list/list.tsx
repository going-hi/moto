import { TFavouritesItem } from '@/entities/favourites'
import { FavouritesItem } from '../@item/item'
import { FavouritesItemSkeleton } from '../@item-skeleton'

export const FavouritesList = ({ list }: { list: TFavouritesItem[] }) => {
	return (
		<ul className='flex gap-[30px] flex-wrap'>
			{list.map((i, index) =>
				i ? (
					<FavouritesItem {...i.product} key={i.id} />
				) : (
					<FavouritesItemSkeleton key={String(index)} />
				)
			)}
		</ul>
	)
}
