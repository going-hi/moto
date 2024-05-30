import { useEffect } from 'react'
import { useAuthStore } from '@/features/auth-user'
import { type TGetCartDto, useCartStore } from '@/entities/cart'
import { useAppQuery } from '@/shared'
import { getCart } from '../../api'

export const useGetCart = () => {
	const { setData, setIsLoading } = useCartStore()
	const { accessToken } = useAuthStore()

	const { data, isFetching } = useAppQuery<TGetCartDto>({
		queryFn: getCart,
		queryKey: ['user/cart'],
		retry: false,
		throwOnError: false,
		enabled: !!accessToken
	})

	useEffect(() => {
		setIsLoading(isFetching)
	}, [isFetching, setIsLoading])

	useEffect(() => {
		if (data) {
			setData(data)
		}
	}, [data, setData])
}
