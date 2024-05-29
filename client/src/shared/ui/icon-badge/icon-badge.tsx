import clsx from 'clsx'
import type { TIconName } from '../icon/@libs'
import { Icon } from '../icon/icon'
import { Badge } from './@badge'

export const IconBadge = ({
	count,
	name,
	className,
	iconClassName,
	color,
	onClick
}: {
	count: number
	name: TIconName
	className?: string
	iconClassName?: string
	color?: string
	onClick?: () => void
}) => {
	return (
		<div
			onClick={onClick}
			className={clsx('relative inline-block', className)}
		>
			<Icon color={color} name={name} className={iconClassName} />
			<Badge count={count} />
		</div>
	)
}
