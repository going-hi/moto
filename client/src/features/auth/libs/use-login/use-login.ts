import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { login } from '../../api'
import { useAuthStore, type TAuthDto, type TLogin } from '../../model'

export const useLogin = () => {
	const navigate = useNavigate()

	const { setAccessToken } = useAuthStore()

	return useAppMutation<TLogin, TAuthDto>({
		mutationFn: login,
		onSuccess: ({ accessToken }) => {
			setAccessToken(accessToken)
			navigate('/')
		}
	})
}
