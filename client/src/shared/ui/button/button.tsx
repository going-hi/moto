import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '../typography'
import { UnderlineWave } from '../underline-wave'
import cl from './button.index.module.css'

const { Text } = Typography

export const Button = ({
	variant,
	path,
	isMain = false,
	className,
	children
}: {
	variant: 'more' | 'parentheses' | 'catalog'
	path?: string
	isMain?: boolean
	className?: string
	children?: ReactNode
}) => {
	switch (variant) {
		case 'more':
			return (
				<Link
					className={clsx(
						'absolute bg-red-light font-extrabold text-[20px] top-[50%] -translate-y-[55%] right-[13%] w-[220px] h-[220px] flex items-center justify-center text-beige rounded-[50%] hover:scale-95 duration-700',
						cl.underline
					)}
					to={path ?? ''}
				>
					<UnderlineWave>
						<Text>БОЛЬШЕ</Text>
					</UnderlineWave>
				</Link>
			)
		case 'parentheses':
			return (
				<Link
					className={clsx(isMain && 'group', className, 'block')}
					to={path ?? ''}
				>
					<div className='bg-black text-white font-bold text-[18px] leading-[25px] justify-center flex will-change-transform'>
						<span>[</span>
						<div className='mx-[28px] group-hover:mx-[20px] duration-700'>
							<span>{children}</span>
							<span className='w-full bg-white h-[2px] block -mt-[4px]' />
						</div>
						<span>]</span>
					</div>
				</Link>
			)
		case 'catalog':
			return (
				<Link
					className={clsx(
						'absolute bg-black font-extrabold text-[20px] top-[15%] right-[35%] w-[220px] h-[220px] flex items-center justify-center text-beige rounded-[50%] hover:scale-95 duration-700 hover will-change-transform',
						cl.underline
					)}
					to='/catalog'
				>
					<UnderlineWave>
						<Text>КАТАЛОГ</Text>
					</UnderlineWave>
				</Link>
			)
		default:
			return <></>
	}
}
