import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { removeFromCart, useCartStore } from '@/entities/cart'
import { useAppMutation } from '@/shared'

export const useRemoveFromCart = () => {
	const { setIsLoading } = useCartStore()

	const queryClient = useQueryClient()

	const mutation = useAppMutation({
		mutationFn: removeFromCart,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user/cart'] })
		}
	})

	const { isPending } = mutation

	useEffect(() => {
		setIsLoading(isPending)
	}, [isPending, setIsLoading])

	return mutation
}
