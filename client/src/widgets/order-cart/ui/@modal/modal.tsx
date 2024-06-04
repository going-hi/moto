import clsx from 'clsx'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Icon, Modal, Typography } from '@/shared'
import { useOrderCartModalStore } from '../../model'

const { Text } = Typography

export const OrderCartModal = () => {
	const { data, close } = useOrderCartModalStore()

	const navigate = useNavigate()

	useEffect(() => {
		if (data) {
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [data])

	const closeModal = () => {
		close()
		navigate('/')
	}

	return (
		<Modal onClick={closeModal} className={clsx(data ? 'flex' : 'hidden')}>
			<div
				onClick={e => e.stopPropagation()}
				className='bg-beige relative max-h-[70dvh] w-[29.5dvw] p-[50px]'
			>
				<div
					onClick={() => closeModal()}
					className='absolute top-[20px] right-[20px] p-[5px] block cursor-pointer'
				>
					<Icon className='w-[25px] h-[25px]' name='Close' />
				</div>
				<div className='mb-[30px] mt-[10px]'>
					<Text className='text-[24px] font-extrabold -tracking-2per mb-[5px]'>
						ВАШ ЗАКАЗ №{data?.id} УСПЕШНО ОФОРМЛЕН
					</Text>
					<Text className='leading-[20px]'>
						Для просмотра истории заказов <br /> можете перейти в
						<Link
							onClick={() => close()}
							className='ml-[5px] underline'
							to='/my-orders'
						>
							личный кабинет
						</Link>
					</Text>
				</div>
				<Button
					path={'/'}
					variant='primary'
					className='!py-[20px]'
					onClick={() => close()}
				>
					НА ГЛАВНУЮ
				</Button>
			</div>
		</Modal>
	)
}
