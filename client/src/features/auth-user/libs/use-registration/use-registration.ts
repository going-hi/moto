import { useNavigate } from 'react-router-dom'
import { useProfileStore } from '@/entities/profile'
import { useAppMutation } from '@/shared'
import { registration } from '../../api'
import { TAuthDto, TRegistrationDto } from '../../model'

export const useRegistration = () => {
	const navigate = useNavigate()

	const { setData } = useProfileStore()

	return useAppMutation<TRegistrationDto, TAuthDto>({
		mutationFn: registration,
		onSuccess: data => {
			setData(data)
			navigate('/')
		}
	})
}
