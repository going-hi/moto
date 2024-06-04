import { z } from 'zod'

import { GetCartDtoSchema } from '../dto'

export type TGetCartDto = z.infer<typeof GetCartDtoSchema>
