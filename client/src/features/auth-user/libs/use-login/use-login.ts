import { useNavigate } from 'react-router-dom'
import { useProfileStore } from '@/entities/profile'
import { useAppMutation } from '@/shared'
import { login } from '../../api'
import { type TAuthDto, type TLogin } from '../../model'

export const useLogin = () => {
	const navigate = useNavigate()

	const { setData } = useProfileStore()

	return useAppMutation<TLogin, TAuthDto>({
		mutationFn: login,
		onSuccess: data => {
			setData(data)
			navigate('/')
		}
	})
}
