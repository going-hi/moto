import clsx from 'clsx'
import type { ReactNode } from 'react'
import cl from './layout.module.css'

export const Layout = ({
	variant,
	children,
	type,
	className
}: {
	variant: 'full' | 'part'
	type: 'single' | 'multi'
	children: ReactNode
	className?: string
}) => {
	const isFull = variant === 'full'
	const isPart = variant === 'part'
	const isMulti = type === 'multi'
	const isSingle = type === 'single'

	if (isMulti && !isFull) {
		alert('error console')
		throw new Error("LAYOUT / if type = 'multi' - variant must be 'full'")
	}

	return (
		<div
			className={clsx(
				'flex w-full',
				isFull && isSingle && cl.full,
				isMulti && cl.multi,
				isPart && 'justify-end',
				isPart && isSingle && cl.single_part,
				className
			)}
		>
			{children}
		</div>
	)
}
