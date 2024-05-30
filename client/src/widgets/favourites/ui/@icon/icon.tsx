import { Link } from 'react-router-dom'
import { useAuthStore } from '@/features/auth-user'
import { useFavouritesStore } from '@/entities/favourites'
import { Icon, IconBadge } from '@/shared'

export const FavouritesIcon = () => {
	const {
		data: { items },
		isLoading
	} = useFavouritesStore()

	const { accessToken } = useAuthStore()

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
					count={items.length}
					className='cursor-pointer dhover:hover:scale-125 duration-700 self-start'
				/>
			)}
		</Link>
	)
}
