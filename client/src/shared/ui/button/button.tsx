import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '../typography'
import { UnderlineWave } from '../underline-wave'
import cl from './button.module.css'

const { Text } = Typography

export const Button = ({
	variant,
	path,
	isMain = false,
	className,
	children,
	...props
}: {
	variant: 'more' | 'parentheses' | 'catalog'
	path?: string
	isMain?: boolean
	className?: string
	children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
	switch (variant) {
		case 'more':
			return (
				<button
					{...props}
					className={clsx(
						'absolute bg-red-light font-extrabold text-[20px] top-[50%] -translate-y-[55%] right-[13%] w-[220px] h-[220px] flex items-center justify-center text-beige rounded-[50%] dhover:hover:scale-95 duration-700',
						cl.underline
					)}
				>
					<UnderlineWave>
						<Text>БОЛЬШЕ</Text>
					</UnderlineWave>
				</button>
			)
		case 'parentheses':
			return (
				<Link
					className={clsx(isMain && 'group', className, 'block')}
					to={path ?? ''}
				>
					<div className='bg-black text-white font-bold text-[18px] leading-[25px] justify-center flex will-change-transform'>
						<span>[</span>
						<div className='mx-[28px] dhover:group-hover:mx-[20px] duration-700'>
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
						'absolute font-extrabold text-[20px] top-[15%] right-[35%] w-[230px] h-[230px] border-beige border-[1px] text-beige rounded-[50%] dhover:hover:scale-95 duration-700 will-change-transform p-[8px]',
						cl.underline
					)}
					to='/catalog'
				>
					<div className='bg-black flex items-center justify-center h-full rounded-[50%]'>
						<UnderlineWave>
							<Text>КАТАЛОГ</Text>
						</UnderlineWave>
					</div>
				</Link>
			)
		default:
			return <></>
	}
}
