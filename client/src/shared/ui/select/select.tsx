import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Typography } from '../typography'

const { Text } = Typography

export const Select = ({
	isOpen,
	setIsOpen,
	maxHeight,
	label,
	width,
	children
}: {
	isOpen: boolean
	setIsOpen: (o: boolean) => void
	maxHeight: string
	label: string
	width: string
	children: ReactNode
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
				className={clsx('text-[18px] relative', width)}
				onClick={e => e.stopPropagation()}
			>
				<div
					className='flex justify-end gap-x-[10px] items-center cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}
				>
					<Text className='text-white font-bold text-[18px] uppercase'>
						{label}
					</Text>
					<img src='/arrow-down.svg' alt='sort' />
				</div>
				<div
					className={clsx(
						'bg-beige absolute top-[30px] right-0 z-30 w-full overflow-hidden duration-700',
						isOpen ? maxHeight : 'max-h-0'
					)}
				>
					{children}
				</div>
			</div>
		</>
	)
}
