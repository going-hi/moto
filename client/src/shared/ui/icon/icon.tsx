import clsx from 'clsx'
import { MouseEvent } from 'react'
import { getIcon, type TIconName } from './@libs'
import cl from './icon.module.css'

export const Icon = ({
	name,
	className,
	color,
	onClick
}: {
	name: TIconName
	className?: string
	color?: string
	onClick: (e: MouseEvent<HTMLOrSVGElement>) => void
}) => {
	const Svg = getIcon(name)

	return (
		<Svg
			onClick={onClick}
			color={color}
			className={clsx(cl.root, color && cl.root_color, className)}
		/>
	)
}
