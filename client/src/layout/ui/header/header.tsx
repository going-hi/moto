import { Link } from 'react-router-dom'
import { Cart } from '@/widgets/cart'
import { FavouritesIcon } from '@/widgets/favourites'
import { useAuthStore } from '@/features/auth-user'
import { Icon } from '@/shared'
import { Container } from '../container'
import { Navigation } from './@navigation'
import { Search } from './@search'

export const Header = () => {
	const { accessToken } = useAuthStore()

	return (
		<header className='py-[20px]'>
			<Container>
				<div className='flex justify-between '>
					<Link to={'/'}>
						<img src='/logo.png' alt='logo' />
					</Link>
					<Navigation />
					<div className='flex justify-between gap-x-[40px] pt-[20px] pr-[25px]'>
						<Search />
						<Link to={accessToken ? '/profile' : '/auth'}>
							<Icon
								color='white'
								name='Profile'
								className='cursor-pointer dhover:hover:scale-125 duration-700'
							/>
						</Link>
						<FavouritesIcon />
						<Cart />
					</div>
				</div>
			</Container>
		</header>
	)
}
