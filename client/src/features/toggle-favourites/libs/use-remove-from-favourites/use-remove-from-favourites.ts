import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useFavouritesStore } from '@/entities/favourites'
import { useAppMutation } from '@/shared'
import { removeFromFavourites } from '../../api'

export const useRemoveFromFavourites = () => {
	const client = useQueryClient()

	const { setIsLoading } = useFavouritesStore()

	const { isPending, mutate } = useAppMutation({
		mutationKey: ['user/favourites/remove'],
		mutationFn: removeFromFavourites,
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['user/favourites'] })
		}
	})

	useEffect(() => {
		setIsLoading(isPending)
	}, [isPending, setIsLoading])

	return { mutate, isPending }
}
