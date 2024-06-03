import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useProfileStore } from '@/entities/profile'
import { refresh } from '../../api'

export const useRefresh = () => {
	const { setData, accessToken } = useProfileStore()

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
			setData(data)
		}
	}, [data, setData])

	return { isLoading, data }
}
