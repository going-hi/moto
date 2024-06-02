import { useQueryClient } from '@tanstack/react-query'
import { useAppMutation } from '@/shared'
import { changeCountCart } from '../../api'
import type { TChangeCounterCartDto, TChangeCounterCart } from '../../model'

export const useCounterCart = () => {
	const client = useQueryClient()

	return useAppMutation<TChangeCounterCart, TChangeCounterCartDto>({
		mutationKey: ['user/cart/add'],
		mutationFn: changeCountCart,
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['user/cart']
			})
		}
	})
}
