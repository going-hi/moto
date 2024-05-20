import clsx from 'clsx'
import type { ReactNode } from 'react'

export const Text = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return <p className={clsx('inter', className)}>{children}</p>
}
