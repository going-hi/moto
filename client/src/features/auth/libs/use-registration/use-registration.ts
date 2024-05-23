import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { registration } from '../../api'
import { TRegistrationDto } from '../../model'

export const useRegistration = () => {
	const navigate = useNavigate()

	return useAppMutation<TRegistrationDto>({
		mutationFn: registration,
		onSuccess: () => {
			navigate('/')
		}
	})
}
