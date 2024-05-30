import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useCartStore } from '@/entities/cart'
import { useAppMutation } from '@/shared'
import { changeCountCart } from '../../api'
import type { TChangeCounterCartDto, TChangeCounterCart } from '../../model'

export const useCounterCart = () => {
	const client = useQueryClient()

	const { isPending, mutate } = useAppMutation<
		TChangeCounterCart,
		TChangeCounterCartDto
	>({
		mutationKey: ['user/cart/add'],
		mutationFn: changeCountCart,
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['user/cart']
			})
		}
	})

	const { setIsLoading } = useCartStore()

	useEffect(() => {
		setIsLoading(isPending)
	}, [isPending, setIsLoading])

	return { mutate }
}
