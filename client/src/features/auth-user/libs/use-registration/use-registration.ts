import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { registration } from '../../api'
import { TAuthDto, TRegistrationDto, useAuthStore } from '../../model'

export const useRegistration = () => {
	const navigate = useNavigate()

	const { setAccessToken } = useAuthStore()

	return useAppMutation<TRegistrationDto, TAuthDto>({
		mutationFn: registration,
		onSuccess: ({ accessToken }) => {
			setAccessToken(accessToken)
			navigate('/')
		}
	})
}
