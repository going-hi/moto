import { useProfileStore } from '@/entities/profile'
import { useAppMutation } from '@/shared'
import { logout } from '../../api'

export const useLogout = () => {
	const { logout: logoutFn } = useProfileStore()

	return useAppMutation({
		mutationFn: logout,
		mutationKey: ['user/logout'],
		onSuccess: () => {
			logoutFn()
		}
	})
}
