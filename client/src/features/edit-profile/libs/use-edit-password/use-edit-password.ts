import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { editPassword } from '../../api'

export const useEditPassword = () => {
	const navigate = useNavigate()

	return useAppMutation({
		mutationFn: editPassword,
		mutationKey: ['user/edit-password'],
		onSuccess: () => {
			navigate('/profile/edit')
		}
	})
}
