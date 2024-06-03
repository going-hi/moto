import { z } from 'zod'

export const EnvSchema = z.object({
	VITE_API_URL: z.string({ message: 'переменная API_URL обязательна' }),
	VITE_IMAGES_URL: z.string({ message: 'переменная IMAGES_URL обязательна' })
})
