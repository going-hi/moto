import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { login } from '../../api'
import type { TLogin } from '../../model'

export const useLogin = () => {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	return useAppMutation<TLogin>({
		mutationFn: login,
		onSuccess: () => {
			queryClient.removeQueries({
				queryKey: ['profile/refresh']
			})
			navigate('/')
		}
	})
}
