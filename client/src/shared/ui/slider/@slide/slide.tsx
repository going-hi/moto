import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useSlider } from '../@model'

export const Slide = ({
	children,
	className,
	index
}: {
	children: ReactNode
	className: string
	index: number
}) => {
	const { activeIndex, onClick } = useSlider()

	return (
		<aside
			onClick={() => onClick(index)}
			className={clsx(
				'shrink-0 grow-0',
				className,
				index !== activeIndex && 'cursor-pointer'
			)}
		>
			{children}
		</aside>
	)
}
