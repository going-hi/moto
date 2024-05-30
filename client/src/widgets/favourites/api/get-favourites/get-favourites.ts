import { GetFavouritesDtoSchema } from '@/entities/favourites'
import { $api } from '@/shared'

export const getFavourites = () =>
	$api.get('/favourites').then(res => GetFavouritesDtoSchema.parse(res))
