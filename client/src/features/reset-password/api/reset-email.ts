import { $api, ZodParseError } from '@/shared'
import { ResetEmailDtoSchema, TResetEmailDto } from '../model'

export const resetEmail = ({ email }: { email: string }) =>
	$api
		.get('/auth/password/reset', {
			params: {
				email
			}
		})
		.then(res =>
			new ZodParseError<TResetEmailDto>(
				ResetEmailDtoSchema,
				res.data
			).result()
		)
