import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'
import { Token } from '@/shared'
import { refresh } from '../../api'

export const useRefresh = () => {
	const accessToken = useRef(Token.getValue())

	const { isLoading, data, refetch } = useQuery({
		queryFn: () => refresh(false),
		queryKey: ['profile/refresh'],
		retry: false,
		refetchOnMount: false
	})

	useEffect(() => {
		if (!accessToken.current) {
			refetch()
		}
	}, [refetch])

	useEffect(() => {
		if (data) {
			Token.setValue(data.accessToken)
		}
	}, [data])

	return { isLoading, data }
}
