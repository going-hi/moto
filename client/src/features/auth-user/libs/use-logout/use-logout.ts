import { useAppMutation } from '@/shared'
import { logout } from '../../api'
import { useAuthStore } from '../../model'

export const useLogout = () => {
	const { setAccessToken } = useAuthStore()

	return useAppMutation({
		mutationFn: logout,
		mutationKey: ['user/logout'],
		onSuccess: () => {
			setAccessToken(null)
		}
	})
}
