import clsx from 'clsx'
import { useState } from 'react'
import { Icon, Typography } from '@/shared'
import { formatCount } from '../libs'
import cl from './accordion.module.css'
import { Layout } from '@/layout'

const { Title, Text } = Typography

export const Accordion = ({
	variant,
	index,
	title
}: {
	variant: 'faq' | 'catalog'
	index: number
	title: string
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className={clsx(
				isOpen
					? `bg-beige ${cl.open} max-h-[150px]`
					: `bg-black ${cl.close} max-h-[90px]`,
				'cursor-pointer flex justify-between overflow-hidden select-none p-[15px] h-full duration-700'
			)}
		>
			<Layout variant='full' type='multi'>
				<>
					<div className=''>
						<Text className='text-[40px] font-medium -skew-x-[10deg] leading-[40px]'>
							{formatCount(index)}
						</Text>
					</div>

					<div className='flex justify-between gap-x-[20px]'>
						<div>
							<Title
								variant={variant === 'catalog' ? 'h2' : 'h5'}
								className={clsx(
									variant === 'catalog'
										? 'leading-[100px]'
										: 'leading-[20px]'
								)}
							>
								{title}
							</Title>
							<Text>
								dsadasdaiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
							</Text>
						</div>
						{variant && <Icon name={isOpen ? 'Minus' : 'Plus'} />}
					</div>
				</>
			</Layout>
		</div>
	)
}
