import { useEffect } from 'react'
import { type TGetCartDto, useCartStore } from '@/entities/cart'
import { useProfileStore } from '@/entities/profile'
import { useAppQuery } from '@/shared'
import { getCart } from '../../api'

export const useGetCart = () => {
	const { setData, setIsLoading } = useCartStore()
	const { accessToken } = useProfileStore()

	const { data, isFetching } = useAppQuery<TGetCartDto>({
		queryFn: getCart,
		queryKey: ['user/cart'],
		retry: false,
		throwOnError: false,
		enabled: !!accessToken,
		refetchOnMount: false
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
