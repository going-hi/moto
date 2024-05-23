import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { login } from '../../api'
import type { TLogin } from '../../model'

export const useLogin = () => {
	const navigate = useNavigate()

	return useAppMutation<TLogin>({
		mutationFn: login,
		onSuccess: res => {
			console.log(res)
			navigate('/')
		}
	})
}
