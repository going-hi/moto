import clsx from 'clsx'
import { type ReactNode, useState } from 'react'
import { Icon, Typography } from '@/shared'

const { Title } = Typography

export const CardBodyAccordion = ({
	title,
	children,
	isLast,
	type
}: {
	title: string
	isLast?: boolean
	children: ReactNode
	type: 'full' | 'container'
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div
			className={clsx(
				'border-t-[1px] border-black',
				isLast && 'border-b-[1px] border-black'
			)}
		>
			<div className='flex justify-between py-[20px]'>
				<Title className='uppercase' variant='h5'>
					{title}
				</Title>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='w-[30px] h-[30px] cursor-pointer'
				>
					<Icon color='black' name={isOpen ? 'Minus' : 'Plus'} />
				</div>
			</div>
			<div
				className={clsx(
					'overflow-hidden font-medium text-[18px] -tracking-2per',
					isOpen ? 'max-h-[100dvh]' : 'max-h-0',
					type === 'container' ? 'max-w-[520px]' : 'max-w-full'
				)}
			>
				{children}
			</div>
		</div>
	)
}
