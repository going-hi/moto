import { useResetStore } from '@/features/reset-password'
import { ResetCodeForm } from './@reset-code'
import { ResetEmailForm } from './@reset-email'

export const ResetPasswordForm = () => {
	const { email } = useResetStore()

	return email ? <ResetCodeForm /> : <ResetEmailForm />
}
