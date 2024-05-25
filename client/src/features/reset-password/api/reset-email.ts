import { $api } from '@/shared'
import { ResetEmailDtoSchema } from '../model'

export const resetEmail = ({ email }: { email: string }) =>
	$api
		.get('/auth/password/reset', {
			params: {
				email
			}
		})
		.then(res => ResetEmailDtoSchema.parse(res.data))
