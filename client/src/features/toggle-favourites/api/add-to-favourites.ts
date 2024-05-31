import { $api } from '@/shared'
import type { TAddToFavourites } from '../model'

export const addToFavourites = (body: TAddToFavourites) =>
	$api.post('/favourites', body)
