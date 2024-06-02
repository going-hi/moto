import { useQueryClient } from '@tanstack/react-query'
import { removeFromCart } from '@/entities/cart'
import { useAppMutation } from '@/shared'

import { addToCart } from '../../api'

export const useToggleCart = (variant: 'add' | 'remove') => {
	const queryClient = useQueryClient()

	console.log('call basket')

	return useAppMutation({
		mutationKey: ['cart/toggle'],
		mutationFn: variant === 'add' ? addToCart : removeFromCart,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['user/cart']
			})
		}
	})
}
