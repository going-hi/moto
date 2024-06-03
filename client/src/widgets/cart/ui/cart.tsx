import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useGetCart } from '../../../entities/cart/libs'
import { CartBody } from './@body'
import { CartIcon } from './@icon'

export const Cart = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
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
			<CartIcon isOpen={isOpen} setIsOpen={setIsOpen} />
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
