import { Link } from 'react-router-dom'
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
						<Icon
							name='Profile'
							className='cursor-pointer hover:scale-125 duration-700'
						/>
						<IconBadge
							name='Favourite'
							count={1}
							className='cursor-pointer hover:scale-125 duration-700 self-start'
						/>
						<IconBadge
							name='Cart'
							count={1}
							className='cursor-pointer hover:scale-125 duration-700 self-start'
						/>
					</div>
				</div>
			</Container>
		</header>
	)
}
