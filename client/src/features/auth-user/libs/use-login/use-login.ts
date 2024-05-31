import { useNavigate } from 'react-router-dom'
import { useAppMutation, Token } from '@/shared'
import { login } from '../../api'
import { type TAuthDto, type TLogin } from '../../model'

export const useLogin = () => {
	const navigate = useNavigate()

	return useAppMutation<TLogin, TAuthDto>({
		mutationFn: login,
		onSuccess: ({ accessToken }) => {
			Token.setValue(accessToken)
			navigate('/')
		}
	})
}
