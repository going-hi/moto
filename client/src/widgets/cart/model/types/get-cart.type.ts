import { z } from 'zod'

import { GetCartDtoSchema } from '../dto'

export type TGetCart = z.infer<typeof GetCartDtoSchema>
