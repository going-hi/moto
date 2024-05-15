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
		<div
			className={clsx(
				'max-w-container mx-auto my-0 px-[16px]',
				className
			)}
		>
			{children}
		</div>
	)
}
