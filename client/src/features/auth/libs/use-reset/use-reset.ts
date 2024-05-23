import { useNavigate } from 'react-router-dom'
import { useAppMutation } from '@/shared'
import { reset } from '../../api'
import { TReset } from '../../model'

export const useReset = () => {
	const navigate = useNavigate()

	return useAppMutation<TReset>({
		mutationFn: reset,
		onSuccess: () => {
			navigate('/auth')
		}
	})
}
