import clsx from 'clsx'
import type { ReactNode } from 'react'
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
	isLast,
	isOpen,
	onClick
}: {
	variant: 'faq' | 'catalog'
	index: number
	title: string
	children: ReactNode
	isLast?: boolean
	isOpen: boolean
	onClick: () => void
}) => {
	return (
		<div
			onClick={onClick}
			className={clsx(
				isOpen
					? `bg-beige ${cl.open} `
					: `bg-black ${cl.close} border-gray-light border-t-[1px]`,
				isLast && !isOpen && 'border-b-[1px]',
				'cursor-pointer select-none p-[15px] duration-700 relative'
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
							<div className='w-[30px] h-[30px] flex items-center'>
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
					'duration-700 overflow-hidden ',
					isOpen ? 'max-h-[1000px]' : 'max-h-0'
				)}
			>
				<div className='self-end'>
					{variant === 'catalog' && isOpen && (
						<Text className='text-[40px] font-medium -skew-x-[10deg] leading-[40px]'>
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
							<div className='w-[30px] h-[30px] flex items-center'>
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
