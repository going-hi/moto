import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { registration } from '../../api'
import { TRegistrationDto } from '../../model'

export const useRegistration = () => {
	const navigate = useNavigate()

	const queryClient = useQueryClient()

	return useAppMutation<TRegistrationDto>({
		mutationFn: registration,
		onSuccess: () => {
			queryClient.removeQueries({
				queryKey: ['profile/refresh']
			})
			navigate('/')
		}
	})
}
