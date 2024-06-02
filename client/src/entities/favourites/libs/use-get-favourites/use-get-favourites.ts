import { type TGetFavouritesDto } from '@/entities/favourites'
import { useProfileStore } from '@/entities/profile'
import { useAppQuery } from '@/shared'
import { getFavourites } from '../../api'

export const useGetFavourites = () => {
	const { accessToken } = useProfileStore()

	return useAppQuery<TGetFavouritesDto>({
		queryKey: ['user/favourites'],
		queryFn: getFavourites,
		retry: false,
		throwOnError: false,
		refetchOnMount: false,
		enabled: !!accessToken
	})
}
