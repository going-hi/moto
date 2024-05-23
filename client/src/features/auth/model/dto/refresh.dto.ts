import { z } from 'zod'
import { ProfileSchema } from '@/entities/profile'

export const RefreshDtoSchema = z.object({
	accessToken: z.string(),
	profile: z.lazy(() => ProfileSchema)
})
