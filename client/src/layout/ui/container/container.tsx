import clsx from 'clsx'
import type { ReactNode } from 'react'

export const Container = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div className={clsx('max-w-container mx-auto my-0', className)}>
			{children}
		</div>
	)
}
