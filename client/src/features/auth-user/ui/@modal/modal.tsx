import clsx from 'clsx'
import { useEffect, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon, Typography, Modal } from '@/shared'

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
		<Modal onClick={() => navigate('/')}>
			<div
				onClick={e => e.stopPropagation()}
				className={clsx(
					'bg-beige  relative max-h-[70dvh] overflow-y-auto',
					variant === 'large' ? 'w-[39dvw]' : 'w-[35.5dvw]'
				)}
			>
				<div
					onClick={() => navigate('/')}
					className='absolute top-[20px] right-[20px] p-[5px] block cursor-pointer'
				>
					<Icon className='w-[25px] h-[25px]' name='Close' />
				</div>

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
		</Modal>
	)
}
