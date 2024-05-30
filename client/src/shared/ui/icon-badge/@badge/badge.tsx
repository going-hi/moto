import type { ReactNode } from 'react'
import { formatCount } from '../@libs'

export const Badge = ({
	count,
	children
}: {
	count?: number
	children?: ReactNode
}) => {
	return (
		<span className='absolute h-[20px] bg-beige text-black rounded-[50%] flex items-center justify-center w-[20px] text-[10px] top-0 -right-[12px]'>
			{children ? children : formatCount(count ?? 0)}
		</span>
	)
}
