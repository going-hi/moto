import clsx from 'clsx'
import type { ReactNode } from 'react'

export const Modal = ({
	children,
	onClick,
	className
}: {
	children: ReactNode
	onClick: () => void
	className?: string
}) => {
	return (
		<div
			className={clsx(
				'w-[100dvw] h-[100dvh] top-0 left-0 right-0 bottom-0 bg-modal fixed z-30 flex items-center justify-center',
				className
			)}
			onClick={onClick}
		>
			{children}
		</div>
	)
}
