import clsx from 'clsx'
import { ReactNode } from 'react'

export const ListItem = ({
	children,
	variant,
	className
}: {
	children: ReactNode
	variant: 'top' | 'center'
	className?: string
}) => {
	return (
		<li
			className={clsx(
				"relative pl-[20px] before:content-[''] before:absolute before:left-0 before:w-[7px] before:h-[7px] before:rounded-[50%] before:bg-black",
				variant === 'top' ? 'before:top-[7%]' : 'before:top-[30%]',
				className
			)}
		>
			{children}
		</li>
	)
}
