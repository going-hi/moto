import clsx from 'clsx'
import { useState, type ReactNode } from 'react'
import { Icon, Typography } from '@/shared'
import { formatCount } from './@libs'
import cl from './accordion.module.css'
import { Layout } from '@/layout'

const { Title, Text } = Typography

export const Accordion = ({
	variant,
	index,
	title,
	children,
	isLast
}: {
	variant: 'faq' | 'catalog'
	index: number
	title: string
	children: ReactNode
	isLast?: boolean
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const onClick = () => {
		if (variant === 'catalog') {
			return
		}

		setIsOpen(!isOpen)
	}

	return (
		<div
			className={clsx(
				isOpen && variant === 'faq'
					? `bg-beige ${cl.open}`
					: `bg-black ${cl.close}`,
				isLast && !isOpen && 'border-b-[1px]',
				variant === 'catalog' &&
					`hover:bg-beige bg-black ${cl.close} ${cl.open_h}`,
				'select-none p-[15px] relative border-gray-light border-t-[1px] group'
			)}
		>
			<Layout variant='full' type='multi'>
				<>
					<div>
						{variant === 'faq' && (
							<Text className='text-[40px] font-medium -skew-x-[10deg] leading-[40px]'>
								{formatCount(index)}
							</Text>
						)}
					</div>

					<div className='flex justify-between gap-x-[20px]'>
						<div
							className={clsx(
								variant === 'catalog'
									? 'basis-full'
									: 'basis-[64%]'
							)}
						>
							<Title
								variant={variant === 'catalog' ? 'h2' : 'h5'}
								className={clsx(
									'py-[15px] uppercase',
									variant === 'catalog'
										? 'leading-[100px] pb-0'
										: 'leading-[24px]'
								)}
							>
								{title}
							</Title>
						</div>
						{variant === 'faq' && !isOpen && (
							<div
								onClick={onClick}
								className='w-[35px] p-[5px] h-[35px] flex items-center cursor-pointer'
							>
								<Icon name={isOpen ? 'Minus' : 'Plus'} />
							</div>
						)}
					</div>
				</>
			</Layout>
			<Layout
				variant='full'
				type='multi'
				className={clsx(
					'overflow-hidden ',
					isOpen && variant === 'faq' && 'max-h-[1000px]',
					variant === 'catalog' && 'group-hover:max-h-[1000px]',
					'max-h-0'
				)}
			>
				<div className='self-end'>
					{variant === 'catalog' && (
						<Text className='text-[40px] font-medium -skew-x-[10deg] leading-[40px] hidden group-hover:block'>
							{formatCount(index)}
						</Text>
					)}
				</div>
				<div className={clsx('text-[18px] leading-[18px] uppercase')}>
					<div className='flex justify-between'>
						<div
							className={clsx(
								variant === 'faq'
									? 'basis-[37%]'
									: 'basis-[80%]'
							)}
						>
							{children}
						</div>
						{variant === 'faq' && isOpen && (
							<div
								onClick={onClick}
								className='w-[35px] p-[5px] h-[35px] flex items-center  cursor-pointer'
							>
								<Icon name={isOpen ? 'Minus' : 'Plus'} />
							</div>
						)}
					</div>
				</div>
			</Layout>
			{isOpen && (
				<div
					className={clsx(
						cl.transparent,
						variant === 'faq'
							? cl.transparent_faq
							: cl.transparent_catalog
					)}
				/>
			)}
		</div>
	)
}
