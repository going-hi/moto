import { createContext } from 'react'

type TCartContext = {
	isLoading: boolean
	setIsLoading: (l: boolean) => void
}

export const CartContext = createContext<TCartContext>({
	isLoading: false,
	setIsLoading: () => {}
})
