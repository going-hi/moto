import { useAppMutation } from '@/shared'
import { resetEmail } from '../../api'
import { useResetStore } from '../../model'

export const useResetEmail = () => {
	const { setEmail } = useResetStore()

	return useAppMutation({
		mutationFn: resetEmail,
		mutationKey: ['auth/reset-email'],
		retry: false,
		onSuccess: ({ email }) => {
			setEmail(email)
		}
	})
}
