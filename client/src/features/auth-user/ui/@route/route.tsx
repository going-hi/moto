import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { FullLoader } from '@/shared'
import { useRefresh } from '../../libs'
import { useAuthStore } from '../../model'

export const AuthRoute = ({
	children,
	variant
}: {
	children: ReactNode
	variant: 'public' | 'authorized' | 'unauthorized'
}) => {
	const { isLoading, data } = useRefresh()
	const { accessToken } = useAuthStore()

	if (isLoading) {
		return <FullLoader />
	}

	if (variant === 'authorized') {
		return accessToken || data ? children : <Navigate to='/' />
	}

	if (variant === 'unauthorized') {
		return accessToken || data ? <Navigate to='/' /> : children
	}

	return children
}
