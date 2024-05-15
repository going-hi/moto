import { Link } from 'react-router-dom'
import type { TNavItem } from '@/shared'

export const Item = ({ path, label }: TNavItem) => {
	return (
		<li className='hover:underline'>
			<Link to={path}>{label}</Link>
		</li>
	)
}
