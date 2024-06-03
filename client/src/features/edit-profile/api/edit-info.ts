import { ProfileSchema, TProfile } from '@/entities/profile'
import { $api, ZodParseError } from '@/shared'
import type { TEditProfileInfo } from '../model'

export const editInfo = (body: TEditProfileInfo) =>
	$api
		.put('/user', body)
		.then(res =>
			new ZodParseError<TProfile>(ProfileSchema, res.data).result()
		)
