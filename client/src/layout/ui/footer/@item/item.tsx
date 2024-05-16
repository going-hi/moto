import { Link } from 'react-router-dom'
import type { TNavItem } from '@/shared'

export const Item = ({ path, label }: TNavItem) => {
	return (
		<li className='hover:underline self-start w-full'>
			<Link className='block' to={path}>
				{label}
			</Link>
		</li>
	)
}
