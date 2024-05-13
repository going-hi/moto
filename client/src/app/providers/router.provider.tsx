import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '@/shared'
import { routes } from '../router/routes'

export const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ isPrivate, path, Page }) =>
					isPrivate ? (
						<PrivateRoute key={path}>
							<Route key={path} path={path} element={<Page />} />
						</PrivateRoute>
					) : (
						<Route key={path} path={path} element={<Page />} />
					)
				)}
			</Routes>
		</BrowserRouter>
	)
}
