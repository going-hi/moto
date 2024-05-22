import clsx from 'clsx'
import type { ReactNode } from 'react'

const classes = {
	h1: 'text-[125px] bebas font-bold -tracking-2per',
	h2: 'text-[115px] bebas font-bold -tracking-2per',
	h3: 'text-[80px] bebas font-bold -tracking-2per',
	h4: 'text-[40px] bebas font-bold -tracking-2per',
	h5: 'text-[24px] inter font-extrabold'
}

export const Title = ({
	variant,
	children,
	className
}: {
	variant: 'h1' | 'h2' | 'h3' | 'h5' | 'h4'
	children: ReactNode
	className?: string
}) => {
	const classNames = clsx(className, classes[variant])

	switch (variant) {
		case 'h1':
			return <h1 className={classNames}>{children}</h1>
		case 'h2':
			return <h2 className={classNames}>{children}</h2>
		case 'h3':
			return <h3 className={classNames}>{children}</h3>
		case 'h4':
			return <h4 className={classNames}>{children}</h4>
		case 'h5':
			return <h5 className={classNames}>{children}</h5>
		default:
			return <></>
	}
}
