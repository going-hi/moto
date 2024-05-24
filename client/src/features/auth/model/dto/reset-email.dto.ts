import { z } from 'zod'

export const ResetEmailDtoSchema = z.object({
	email: z.string().email({ message: 'Невалидная почта' })
})
