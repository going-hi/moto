import clsx from 'clsx'
import type { ReactNode } from 'react'

export const Wrapper = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div className={clsx('bg-red-light pb-[10px]', className)}>
			{children}
		</div>
	)
}
