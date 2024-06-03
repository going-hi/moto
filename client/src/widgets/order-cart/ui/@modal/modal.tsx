import clsx from 'clsx'
import { useEffect } from 'react'
import { Icon, Modal } from '@/shared'
import { useOrderCartModalStore } from '../../model'

export const OrderCartModal = () => {
	const { setIsShow, isShow } = useOrderCartModalStore()

	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isShow])

	return (
		<Modal
			onClick={() => setIsShow(false)}
			className={clsx(isShow ? 'flex' : 'hidden')}
		>
			<div
				onClick={e => e.stopPropagation()}
				className='bg-beige relative max-h-[70dvh] w-[33dvw] p-[50px]'
			>
				<div
					onClick={() => setIsShow(false)}
					className='absolute top-[20px] right-[20px] p-[5px] block cursor-pointer'
				>
					<Icon className='w-[25px] h-[25px]' name='Close' />
				</div>
			</div>
		</Modal>
	)
}
