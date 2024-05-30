import clsx from 'clsx'
import { ReactNode } from 'react'

export const Parentheses = ({
	children,
	bodyClassName,
	lineClassName
}: {
	children: ReactNode
	bodyClassName?: string
	lineClassName?: string
}) => {
	return (
		<div
			className={clsx(
				'bg-black text-white font-bold text-[18px] leading-[25px] justify-center flex items-center h-full',
				bodyClassName
			)}
		>
			<span>[</span>
			<div className='mx-[28px] dhover:group-hover:mx-[20px] duration-700'>
				<span>{children}</span>
				<span
					className={clsx(
						'w-full bg-white h-[2px] block -mt-[4px]',
						lineClassName
					)}
				/>
			</div>
			<span>]</span>
		</div>
	)
}
