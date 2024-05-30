import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const Primary = ({
	children,
	path,
	className,
	...props
}: {
	children: ReactNode
	path?: string
	className?: string
}) => {
	return path ? (
		<Link
			to={path}
			className={clsx(
				'py-[23px] w-full bg-black text-beige font-bold dhover:hover:scale-[102%] duration-700 block text-center will-change-transform',
				className
			)}
		>
			{children}
		</Link>
	) : (
		<button
			{...props}
			className={clsx(
				'py-[23px] w-full bg-black text-beige font-bold dhover:hover:scale-[102%] duration-700 will-change-transform',
				className
			)}
		>
			{children}
		</button>
	)
}
