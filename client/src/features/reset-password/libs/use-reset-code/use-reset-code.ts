import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { resetCode } from '../../api'

export const useResetCode = () => {
	const navigate = useNavigate()

	return useAppMutation({
		mutationFn: resetCode,
		mutationKey: ['auth/reset-code'],
		retry: false,
		onSuccess: () => {
			navigate('/')
		}
	})
}
