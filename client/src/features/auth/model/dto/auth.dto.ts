import { z } from 'zod'
import { ProfileSchema } from '@/entities/profile'

export const AuthDtoSchema = z.object({
	accessToken: z.string(),
	profile: z.lazy(() => ProfileSchema)
})
