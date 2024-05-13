import clsx from 'clsx'
import { getIcon, type TIconName } from './@libs'
import cl from './icon.module.css'

export const Icon = ({
	name,
	className,
	color
}: {
	name: TIconName
	className?: string
	color?: string
}) => {
	const Svg = getIcon(name)

	return (
		<Svg
			color={color}
			className={clsx(cl.root, color && cl.root_color, className)}
		/>
	)
}
