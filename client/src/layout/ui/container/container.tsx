import clsx from 'clsx'
import type { ReactNode } from 'react'

export const Container = ({
	children,
	className,
	bodyClassName
}: {
	children: ReactNode
	className?: string
	bodyClassName?: string
}) => {
	return (
		<div className={clsx('max-w-container mx-auto my-0', className)}>
			{bodyClassName ? (
				<div className={clsx('px-[30px]', bodyClassName)}>
					{children}
				</div>
			) : (
				children
			)}
		</div>
	)
}
