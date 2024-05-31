import { z } from 'zod'
import { GetFavouritesDtoSchema } from '../dto'

export type TGetFavouritesDto = z.infer<typeof GetFavouritesDtoSchema>
