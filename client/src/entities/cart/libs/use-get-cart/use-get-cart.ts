import { useProfileStore } from '@/entities/profile'
import { useAppQuery } from '@/shared'
import { getCart } from '../../api'
import type { TGetCartDto } from '../../model'

export const useGetCart = () => {
	const { accessToken } = useProfileStore()

	return useAppQuery<TGetCartDto>({
		queryFn: getCart,
		queryKey: ['user/cart'],
		retry: false,
		throwOnError: false,
		enabled: !!accessToken,
		refetchOnMount: false
	})
}
