import clsx from 'clsx'
import type { ReactNode } from 'react'

export const Slide = ({
	children,
	className
}: {
	children: ReactNode
	className: string
}) => {
	return (
		<aside className={clsx('shrink-0 grow-0', className)}>{children}</aside>
	)
}
