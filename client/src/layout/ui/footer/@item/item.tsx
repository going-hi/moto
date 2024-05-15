import { Link } from 'react-router-dom'
import type { TNavItem } from '@/shared'

export const Item = ({ path, label }: TNavItem) => {
	return (
		<li className='hover:underline self-start'>
			<Link to={path}>{label}</Link>
		</li>
	)
}
