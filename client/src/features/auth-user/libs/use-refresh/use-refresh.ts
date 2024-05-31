import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { refresh } from '../../api'
import { useAuthStore } from '../../model'

export const useRefresh = () => {
	const { setAccessToken, accessToken } = useAuthStore()

	const { isLoading, data, refetch } = useQuery({
		queryFn: () => refresh(false),
		queryKey: ['profile/refresh'],
		retry: false,
		refetchOnMount: false
	})

	useEffect(() => {
		if (!accessToken) {
			refetch()
		}
	}, [refetch, accessToken])

	useEffect(() => {
		if (data) {
			setAccessToken(data.accessToken)
		}
	}, [data, setAccessToken])

	return { isLoading, data }
}
