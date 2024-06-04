import { z } from 'zod'
import { CardCharacteristicSchema } from '../schema'

export type TCardCharacteristic = z.infer<typeof CardCharacteristicSchema>
