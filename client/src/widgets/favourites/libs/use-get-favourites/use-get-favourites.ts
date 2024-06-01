import { useEffect } from 'react'
import {
	useFavouritesStore,
	type TGetFavouritesDto
} from '@/entities/favourites'
import { useProfileStore } from '@/entities/profile'
import { useAppQuery } from '@/shared'
import { getFavourites } from '../../api'

export const useGetFavourites = () => {
	const { setIsLoading, setData } = useFavouritesStore()
	const { accessToken } = useProfileStore()

	const { isFetching, data } = useAppQuery<TGetFavouritesDto>({
		queryKey: ['user/favourites'],
		queryFn: getFavourites,
		retry: false,
		throwOnError: false,
		refetchOnMount: false,
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
