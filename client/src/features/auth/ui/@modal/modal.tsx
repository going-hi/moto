import clsx from 'clsx'
import { useEffect, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Icon, Typography } from '@/shared'

const { Title } = Typography

export const AuthModal = ({
	children,
	variant
}: {
	children: ReactNode
	variant: 'large' | 'small'
}) => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		const clickEsc = (e: KeyboardEvent) => {
			if (e.key !== 'Escape') return
			navigate('/')
		}

		window.addEventListener('keyup', clickEsc)

		return () => {
			document.body.style.overflow = 'auto'
			window.removeEventListener('keyup', clickEsc)
		}
	}, [navigate])

	return (
		<div
			className='w-[100dvw] h-[100dvh] top-0 left-0 right-0 bottom-0 bg-modal fixed z-30 flex items-center justify-center '
			onClick={() => navigate('/')}
		>
			<div
				onClick={e => e.stopPropagation()}
				className={clsx(
					'bg-beige  relative min-h-[50dvh] max-h-[70dvh] overflow-y-auto',
					variant === 'large' ? 'w-[39dvw]' : 'w-[35.5dvw]'
				)}
			>
				<Link
					to='/'
					className='absolute top-[20px] right-[20px] p-[5px] block'
				>
					<Icon className='w-[25px] h-[25px]' name='Close' />
				</Link>

				<div className='py-[40px] px-[60px]'>
					<Title
						className='mb-[10px] uppercase text-left'
						variant='h3'
					>
						{pathname === '/auth/reset'
							? 'Восстановление пароля'
							: 'Личный кабинет'}
					</Title>
					{children}
				</div>
			</div>
		</div>
	)
}
