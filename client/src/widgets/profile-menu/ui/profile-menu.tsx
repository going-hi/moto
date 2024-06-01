import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { AuthLogout } from '@/features/auth-user'
import { profileMenuItemsArr } from '../model'

export const ProfileMenu = () => {
	const { pathname } = useLocation()

	return (
		<aside>
			<nav className='mb-[50px]'>
				<ul className='flex flex-col gap-y-[20px]'>
					{profileMenuItemsArr.map(i => (
						<li
							key={i.path}
							className={clsx(
								'font-medium',
								pathname === i.path &&
									'relative after:absolute after:bottom-0 after:right-0 after:w-full after:bg-black after:h-[2px]'
							)}
						>
							<Link to={i.path}>{i.label}</Link>
						</li>
					))}
				</ul>
			</nav>
			<AuthLogout />
		</aside>
	)
}
