import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { refresh } from '../../api'
import { useAuthStore } from '../../model'

export const useRefresh = () => {
	const { isLoading, data } = useQuery({
		queryFn: () => refresh(false),
		queryKey: ['profile/refresh'],
		retry: false
	})

	const { setAccessToken } = useAuthStore()

	useEffect(() => {
		if (data) {
			setAccessToken(data.accessToken)
		}
	}, [data, setAccessToken])

	return { isLoading }
}
