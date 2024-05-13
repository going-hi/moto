import clsx from 'clsx'
import type { TIconName } from '../icon/@libs'
import { Icon } from '../icon/icon'
import { Badge } from './@badge'

export const IconBadge = ({
	count,
	name,
	className,
	iconClassName
}: {
	count: number
	name: TIconName
	className?: string
	iconClassName?: string
}) => {
	return (
		<div className={clsx('relative inline-block', className)}>
			<Icon name={name} className={iconClassName} />
			<Badge count={count} />
		</div>
	)
}
