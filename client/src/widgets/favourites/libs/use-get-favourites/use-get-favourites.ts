import { useEffect } from 'react'
import {
	useFavouritesStore,
	type TGetFavouritesDto
} from '@/entities/favourites'
import { useAppQuery } from '@/shared'
import { getFavourites } from '../../api'

export const useGetFavourites = () => {
	const { setIsLoading, setData } = useFavouritesStore()

	const { isFetching, data } = useAppQuery<TGetFavouritesDto>({
		queryKey: ['user/favourites'],
		queryFn: getFavourites
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
