import { z } from 'zod'
import { RegistrationSchema } from '../schema'

export type TRegistration = z.infer<typeof RegistrationSchema>
export type TRegistrationFields = keyof TRegistration
