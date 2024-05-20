import clsx from 'clsx'
import type { ReactNode } from 'react'

export const Slide = ({
	children,
	className,
	onClick
}: {
	children: ReactNode
	className?: string
	onClick?: () => void
}) => {
	return (
		<aside onClick={onClick} className={clsx('shrink-0 grow-0', className)}>
			{children}
		</aside>
	)
}
