import { z } from 'zod'

export const GetFiltersDtoSchema = z.record(z.array(z.string().or(z.number())))
