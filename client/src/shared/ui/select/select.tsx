import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Icon } from '../icon'
import { Typography } from '../typography'

const { Text } = Typography

export const Select = ({
	maxHeight,
	label,
	width,
	children,
	isOpen,
	setIsOpen,
	position
}: {
	maxHeight: string
	label: string
	width: string
	children: ReactNode
	isOpen: boolean
	setIsOpen: (o: boolean) => void
	position: 'left' | 'right'
}) => {
	return (
		<>
			<div
				className={clsx(
					'fixed w-[100dvw] h-[100dvh] z-20 top-0 left-0 right-0 bottom-0',
					isOpen ? 'block' : 'hidden'
				)}
				onClick={() => setIsOpen(false)}
			/>
			<div
				className={clsx(
					'text-[18px]',
					width !== 'w-[100dvw]' && 'relative'
				)}
				onClick={e => e.stopPropagation()}
			>
				<div
					className={clsx(
						'flex gap-x-[10px] items-center cursor-pointer group',
						position === 'right' ? 'justify-start' : 'justify-end'
					)}
					onClick={() => setIsOpen(!isOpen)}
				>
					<Text className='text-white font-bold text-[18px] uppercase group-hover:underline'>
						{label}
					</Text>
					<Icon
						color='white'
						name='ArrowDown'
						className={clsx(
							isOpen ? 'rotate-180' : 'rotate-0',
							'duration-500'
						)}
					/>
				</div>
				<div
					className={clsx(
						'bg-beige absolute top-[30px] z-30 overflow-hidden duration-700',
						isOpen ? maxHeight : 'max-h-0 right-0',
						position === 'right' ? 'right-0' : 'left-0',
						width
					)}
				>
					{children}
				</div>
			</div>
		</>
	)
}
