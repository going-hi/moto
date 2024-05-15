import { Link } from 'react-router-dom'
import { UnderlineWave } from '@/shared'
import { headerLinksArr } from '../@model'

export const Navigation = () => {
	return (
		<nav className='self-start pt-[20px]'>
			<ul className='flex gap-x-[100px]'>
				{headerLinksArr.map(({ label, path }) => (
					<li key={path}>
						<UnderlineWave>
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
