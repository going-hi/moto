import clsx from 'clsx'

export const Skeleton = ({ className }: { className?: string }) => {
	return (
		<div
			className={clsx(
				'aspect-square animate-skeleton-loading',
				className
			)}
		/>
	)
}
