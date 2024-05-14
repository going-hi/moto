import clsx from 'clsx'
import type { ReactNode } from 'react'

const classes = {
	h2: 'text-[115px] bebas font-bold -tracking-2per',
	h4: 'text-[40px] bebas font-bold -tracking-2per',
	h5: 'text-[24px] inter font-extrabold'
}

export const Title = ({
	variant,
	children,
	className
}: {
	variant: 'h2' | 'h5' | 'h4'
	children: ReactNode
	className?: string
}) => {
	const classNames = clsx(className, classes[variant])

	switch (variant) {
		case 'h2':
			return <h2 className={classNames}>{children}</h2>
		case 'h4':
			return <h4 className={classNames}>{children}</h4>
		case 'h5':
			return <h5 className={classNames}>{children}</h5>
		default:
			return <></>
	}
}
