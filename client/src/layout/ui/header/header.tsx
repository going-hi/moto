import { Link } from 'react-router-dom'
import { Basket } from '@/widgets/basket'
import { Icon, IconBadge } from '@/shared'
import { Container } from '../container'
import { Navigation } from './@navigation'
import { Search } from './@search'

export const Header = () => {
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
						<Link to='/auth'>
							<Icon
								color='white'
								name='Profile'
								className='cursor-pointer dhover:hover:scale-125 duration-700'
							/>
						</Link>
						<IconBadge
							color='white'
							name='Favourite'
							count={1}
							className='cursor-pointer dhover:hover:scale-125 duration-700 self-start'
						/>
						<Basket />
					</div>
				</div>
			</Container>
		</header>
	)
}
