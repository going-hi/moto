import clsx from 'clsx'
import type { TNavItem } from '@/shared'

import { Item } from '../@item'

export const List = ({
	list,
	className
}: {
	list: TNavItem[]
	className?: string
}) => {
	return (
		<ul
			className={clsx(
				'flex flex-col gap-y-[10px] max-w-[180px]',
				className
			)}
		>
			{list.map((i, index) => (
				<Item key={String(index)} {...i} />
			))}
		</ul>
	)
}
