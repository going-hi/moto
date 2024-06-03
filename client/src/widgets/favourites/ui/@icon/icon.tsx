import { Link } from 'react-router-dom'
import { useGetFavourites } from '@/entities/favourites'
import { useProfileStore } from '@/entities/profile'
import { Icon, IconBadge } from '@/shared'

export const FavouritesIcon = () => {
	const { data, isLoading } = useGetFavourites()

	const { accessToken } = useProfileStore()

	if (!accessToken) {
		return <></>
	}

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
					count={(data?.items ?? []).length}
					className='cursor-pointer dhover:hover:scale-125 duration-700 self-start'
				/>
			)}
		</Link>
	)
}
