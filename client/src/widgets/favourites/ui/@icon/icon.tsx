import { Link } from 'react-router-dom'
import { useFavouritesStore } from '@/entities/favourites'
import { useProfileStore } from '@/entities/profile'
import { Icon, IconBadge } from '@/shared'
import { useGetFavourites } from '../../libs'

export const FavouritesIcon = () => {
	const {
		data: { items },
		isLoading
	} = useFavouritesStore()

	useGetFavourites()

	const { accessToken } = useProfileStore()

	if (!accessToken) {
		return <></>
	}

	console.log('favourites', items)

	return (
		<Link to='/favourites'>
			{isLoading ? (
				<IconBadge
					color='white'
					name='Favourite'
					className='cursor-pointer dhover:hover:scale-125 duration-700 self-start'
				>
					<Icon
						className='w-[15px] h-[15px] animate-spin-1000'
						name='Loading'
					/>
				</IconBadge>
			) : (
				<IconBadge
					color='white'
					name='Favourite'
					count={items.length}
					className='cursor-pointer dhover:hover:scale-125 duration-700 self-start'
				/>
			)}
		</Link>
	)
}
