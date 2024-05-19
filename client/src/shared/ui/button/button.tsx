import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Catalog } from './@catalog'
import { More } from './@more'
import { Parentheses } from './@parentheses'

export const Button = ({
	variant,
	path,
	isMain = false,
	className,
	children,
	...props
}: {
	variant: 'more' | 'parentheses-button' | 'catalog' | 'parentheses-link'
	path?: string
	isMain?: boolean
	className?: string
	children?: ReactNode
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
					<Parentheses>{children}</Parentheses>
				</Link>
			)
		case 'parentheses-button':
			return (
				<button
					{...props}
					className={clsx(isMain && 'group', className)}
				>
					<Parentheses>{children}</Parentheses>
				</button>
			)
		case 'catalog':
			return <Catalog />
		default:
			return <></>
	}
}
