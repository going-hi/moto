import { useResetStore } from '../../model'
import { AuthResetCode } from '../@reset-code'
import { AuthResetEmail } from '../@reset-email'

export const AuthReset = () => {
	const { email } = useResetStore()

	return email ? <AuthResetCode /> : <AuthResetEmail />
}
