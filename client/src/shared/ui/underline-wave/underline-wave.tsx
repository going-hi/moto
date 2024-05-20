import clsx from 'clsx'
import { ReactNode } from 'react'
import cl from './underline-wave.module.css'

export const UnderlineWave = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div className={clsx(cl.root, 'relative', className)}>{children}</div>
	)
}
