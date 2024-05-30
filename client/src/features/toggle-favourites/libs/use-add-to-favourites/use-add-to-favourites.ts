import { useQueryClient } from '@tanstack/react-query'
import { useAppMutation } from '@/shared'
import { addToFavourites } from '../../api'

export const useAddToFavourites = () => {
	const client = useQueryClient()

	const { isPending } = useAppMutation({
		mutationFn: addToFavourites,
		mutationKey: ['user/favourites/add'],
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['user/favourites'] })
		}
	})
}
