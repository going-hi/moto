import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { UnderlineWave } from '@/shared'
import { headerLinksArr } from '../@model'
import cl from './navigation.module.css'

export const Navigation = () => {
	const { pathname } = useLocation()

	return (
		<nav className='self-start pt-[20px]'>
			<ul className='flex gap-x-[100px]'>
				{headerLinksArr.map(({ label, path }) => (
					<li key={path}>
						<UnderlineWave
							className={clsx(pathname.includes(path) && cl.root)}
						>
							<Link
								className='text-beige text-[16px] font-bold'
								to={path}
							>
								{label}
							</Link>
						</UnderlineWave>
					</li>
				))}
			</ul>
		</nav>
	)
}
