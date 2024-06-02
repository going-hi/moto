import {
	GetFavouritesDtoSchema,
	TGetFavouritesDto
} from '@/entities/favourites'
import { $api, ZodParseError } from '@/shared'

export const getFavourites = () =>
	$api
		.get('/favourites')
		.then(res =>
			new ZodParseError<TGetFavouritesDto>(
				GetFavouritesDtoSchema,
				res.data
			).result()
		)
