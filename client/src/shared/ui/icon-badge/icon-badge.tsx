import type { TIconName } from '../icon/@libs'
import { Icon } from '../icon/icon'
import { Badge } from './@badge'

export const IconBadge = ({
	count,
	name
}: {
	count: number
	name: TIconName
}) => {
	return (
		<div className='relative inline-block'>
			<Icon name={name} />
			<Badge count={count} />
		</div>
	)
}
