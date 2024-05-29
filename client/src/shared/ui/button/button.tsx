import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon, TIconName } from '../icon'
import { Catalog } from './@catalog'
import { More } from './@more'
import { Parentheses } from './@parentheses'
import { Primary } from './@primary'

export const Button = ({
	variant,
	path,
	isMain = false,
	className,
	children,
	iconName,
	bodyClassName,
	color,
	...props
}: {
	variant:
		| 'more'
		| 'parentheses-button'
		| 'catalog'
		| 'parentheses-link'
		| 'icon'
		| 'primary'
	path?: string
	isMain?: boolean
	className?: string
	children?: ReactNode
	iconName?: TIconName
	bodyClassName?: string
	color?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
	switch (variant) {
		case 'more':
			return <More {...props} />
		case 'parentheses-link':
			return (
				<Link
					className={clsx(isMain && 'group', className, 'block')}
					to={path ?? ''}
				>
					<Parentheses bodyClassName={bodyClassName}>
						{children}
					</Parentheses>
				</Link>
			)
		case 'parentheses-button':
			return (
				<button
					{...props}
					className={clsx(isMain && 'group', className)}
				>
					<Parentheses bodyClassName={bodyClassName}>
						{children}
					</Parentheses>
				</button>
			)
		case 'catalog':
			return <Catalog {...props} />
		case 'icon':
			return (
				<button {...props} className={className}>
					{iconName && (
						<Icon
							color={color}
							className={bodyClassName}
							name={iconName}
						/>
					)}
				</button>
			)
		case 'primary':
			return (
				<Primary path={path} {...props} className={className}>
					{children}
				</Primary>
			)
		default:
			return <></>
	}
}
