import { useQuery } from '@tanstack/react-query'
import { refresh } from '../../api'
import { useAuthStore } from '../../model'

export const useRefresh = () => {
	const { isLoading, data } = useQuery({
		queryFn: () => refresh(true),
		queryKey: ['profile/refresh'],
		retry: false
	})

	const { setAccessToken } = useAuthStore()

	if (data) {
		setAccessToken(data.accessToken)
	}

	return { isLoading }
}
