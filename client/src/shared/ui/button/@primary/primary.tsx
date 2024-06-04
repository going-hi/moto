import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const Primary = ({
	children,
	path,
	className,
	disabled,
	onClick,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode
	path?: string
	className?: string
}) => {
	return path ? (
		<Link
			to={path}
			// @ts-expect-error onClick for link or button
			onClick={onClick}
			className={clsx(
				'py-[23px] w-full bg-black text-beige font-bold duration-700 block text-center will-change-transform dhover:hover:scale-[102%]',
				className
			)}
		>
			{children}
		</Link>
	) : (
		<button
			{...props}
			disabled={disabled}
			className={clsx(
				'py-[23px] w-full bg-black text-beige font-bold duration-700 will-change-transform',
				!disabled && 'dhover:hover:scale-[102%]',
				className
			)}
		>
			{children}
		</button>
	)
}
