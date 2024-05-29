import { type ReactNode, useState } from 'react'
import { CartContext } from '../../model'

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	return (
		<CartContext.Provider value={{ setIsLoading, isLoading }}>
			{children}
		</CartContext.Provider>
	)
}
