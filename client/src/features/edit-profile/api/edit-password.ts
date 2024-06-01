import { $api } from '@/shared'

import type { TEditPasswordDto } from '../model'

export const editPassword = (body: TEditPasswordDto) =>
	$api.post('/auth/password/change', body)
