import { useNavigate } from 'react-router-dom'
import { Token, useAppMutation } from '@/shared'
import { registration } from '../../api'
import { TAuthDto, TRegistrationDto } from '../../model'

export const useRegistration = () => {
	const navigate = useNavigate()

	return useAppMutation<TRegistrationDto, TAuthDto>({
		mutationFn: registration,
		onSuccess: ({ accessToken }) => {
			Token.setValue(accessToken)
			navigate('/')
		}
	})
}
