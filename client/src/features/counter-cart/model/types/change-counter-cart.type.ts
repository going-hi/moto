import { z } from 'zod'
import { ChangeCountCartDtoSchema } from '../dto'

export type TChangeCounterCart = {
	count: number
	id: number
}

export type TChangeCounterCartDto = z.infer<typeof ChangeCountCartDtoSchema>
