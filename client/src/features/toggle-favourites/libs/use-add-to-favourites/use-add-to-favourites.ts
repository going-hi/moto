import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useFavouritesStore } from '@/entities/favourites'
import { useAppMutation } from '@/shared'
import { addToFavourites } from '../../api'

export const useAddToFavourites = () => {
	const client = useQueryClient()

	const { setIsLoading } = useFavouritesStore()

	const { isPending, mutate } = useAppMutation({
		mutationFn: addToFavourites,
		mutationKey: ['user/favourites/add'],
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['user/favourites'] })
		}
	})

	useEffect(() => {
		setIsLoading(isPending)
	}, [isPending, setIsLoading])

	return { isPending, mutate }
}
