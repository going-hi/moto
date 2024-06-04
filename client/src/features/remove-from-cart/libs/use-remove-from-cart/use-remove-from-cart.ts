import { useQueryClient } from '@tanstack/react-query'
import { removeFromCart } from '@/entities/cart'
import { useAppMutation } from '@/shared'

export const useRemoveFromCart = () => {
	const queryClient = useQueryClient()

	return useAppMutation({
		mutationFn: removeFromCart,
		mutationKey: ['user/cart/remove'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user/cart'] })
		}
	})
}
