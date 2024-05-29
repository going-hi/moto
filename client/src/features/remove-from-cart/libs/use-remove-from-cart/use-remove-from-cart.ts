import { useQueryClient } from '@tanstack/react-query'
import { useContext, useEffect } from 'react'
import { useAppMutation } from '@/shared'

import { removeFromCart } from '../../api'
import type { TContext } from '../../model'

export const useRemoveFromCart = (ctx: TContext) => {
	const { setIsLoading } = useContext(ctx)

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
