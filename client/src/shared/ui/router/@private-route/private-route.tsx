import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
	const isAuth = false

	return isAuth ? children : <Navigate to='/' />
}
