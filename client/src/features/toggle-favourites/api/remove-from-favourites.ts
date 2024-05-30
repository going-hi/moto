import { $api } from '@/shared'
import type { TRemoveFromFavourites } from '../model'

export const removeFromFavourites = ({ id }: TRemoveFromFavourites) =>
	$api.delete(`/favourites/${id}`)
