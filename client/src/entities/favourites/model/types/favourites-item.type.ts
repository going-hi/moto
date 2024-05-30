import { z } from 'zod'
import { FavouritesItemSchema } from '../dto'

export type TFavouritesItem = z.infer<typeof FavouritesItemSchema>
