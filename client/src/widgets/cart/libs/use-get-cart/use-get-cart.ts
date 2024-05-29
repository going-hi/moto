import { useEffect, useContext } from 'react'
import { useAuthStore } from '@/features/auth-user'
import { useAppQuery } from '@/shared'
import { getCart } from '../../api'
import { useCartStore, type TGetCart, CartContext } from '../../model'

export const useGetCart = () => {
	const { setIsLoading } = useContext(CartContext)
	const { setData } = useCartStore()
	const { accessToken } = useAuthStore()
	const { data, refetch, isLoading } = useAppQuery<TGetCart>({
		queryFn: getCart,
		queryKey: ['user/cart'],
		retry: false,
		throwOnError: false,
		enabled: false
	})

	useEffect(() => {
		if (accessToken) refetch()
	}, [accessToken, refetch])

	useEffect(() => {
		setIsLoading(isLoading)
	}, [isLoading, setIsLoading])

	useEffect(() => {
		if (data) {
			const {
				items,
				meta: { total }
			} = data

			setData({ items, total })
		}
	}, [data, setData])
}
