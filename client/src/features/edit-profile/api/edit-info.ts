import { $api } from '@/shared'
import type { TEditProfileInfo } from '../model'

export const editInfo = (body: TEditProfileInfo) => $api.put('/user', body)
