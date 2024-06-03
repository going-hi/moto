import { useQueryClient } from '@tanstack/react-query'
import { useAppMutation } from '@/shared'
import { addToFavourites, removeFromFavourites } from '../../api'

export const useToggleFavourites = (variant: 'add' | 'remove') => {
	const client = useQueryClient()

	return useAppMutation({
		mutationKey: ['user/favourites/toggle'],
		mutationFn: ({ id, product }: { id?: number; product?: number }) =>
			variant === 'add'
				? addToFavourites({ product: product ?? 0 })
				: removeFromFavourites({ id: id ?? 0 }),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['user/favourites'] })
		}
	})
}
