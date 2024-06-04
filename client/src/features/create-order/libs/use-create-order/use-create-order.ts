import { useQueryClient } from '@tanstack/react-query'
import { TCreateOrder } from '@/entities/order'
import { useAppMutation } from '@/shared'
import { createOrder } from '../../api'
import { useOrderCartModalStore, type TCreateOrderDto } from '../../model'

export const useCreateOrder = () => {
	const queryClient = useQueryClient()
	const { setData } = useOrderCartModalStore()

	return useAppMutation<TCreateOrder, TCreateOrderDto | null>({
		mutationFn: createOrder,
		mutationKey: ['user/my-orders/add'],
		onSuccess: data => {
			if (data) {
				setData(data)
				queryClient.invalidateQueries({
					queryKey: ['user/my-orders']
				})
				queryClient.invalidateQueries({
					queryKey: ['user/cart']
				})
			}
		}
	})
}
