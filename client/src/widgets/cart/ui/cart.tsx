import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/entities/cart'
import { IconBadge } from '@/shared'
import { useGetCart } from '../libs'
import { CartBody } from './@body'

export const Cart = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const {
		data: { items }
	} = useCartStore()

	useGetCart()

	useEffect(() => {
		return () => {
			setIsOpen(false)
			document.body.style.overflow = 'auto'
		}
	}, [])

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto'
	}, [isOpen])

	return (
		<>
			<IconBadge
				onClick={() => setIsOpen(!isOpen)}
				color='white'
				name='Cart'
				count={items.length}
				className='cursor-pointer dhover:hover:scale-125 duration-700 self-start'
			/>
			<div
				className={clsx(
					'fixed w-[100dvw] h-[100dvh] top-0 left-0 bottom-0 right-0 z-40 bg-modal duration-700',
					isOpen ? 'visible opacity-100' : 'invisible opacity-0'
				)}
				onClick={() => setIsOpen(false)}
			></div>
			<div
				onClick={e => e.stopPropagation()}
				className={clsx(
					'fixed duration-700 h-[100dvh] top-0 right-0 bg-beige z-50 w-[50dvw]',
					isOpen ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<CartBody setIsOpen={setIsOpen} />
			</div>
		</>
	)
}
