import { z } from 'zod'
import { ProfileSchema } from '../schema'

export const AuthDtoSchema = z.object({
	accessToken: z.string(),
	profile: z.lazy(() => ProfileSchema)
})
