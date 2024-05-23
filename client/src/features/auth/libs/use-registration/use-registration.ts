import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { registration } from '../../api'
import { TRegistration } from '../../model'

export const useRegistration = () => {
	const navigate = useNavigate()

	return useAppMutation<TRegistration>({
		mutationFn: registration,
		onSuccess: () => {
			navigate('/')
		}
	})
}
