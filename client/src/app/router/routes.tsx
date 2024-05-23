import { createBrowserRouter } from 'react-router-dom'
import { CardPage } from '@/pages/card'
import { CatalogPage, RedirectCatalogPage } from '@/pages/catalog'
import { HomePage } from '@/pages/home'
import { AuthRoute } from '@/features/auth'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<AuthRoute variant='public'>
				<HomePage />
			</AuthRoute>
		)
	},
	{
		path: '/auth',
		element: (
			<AuthRoute variant='unauthorized'>
				<HomePage />
			</AuthRoute>
		)
	},
	{
		path: '/auth/reset',
		element: (
			<AuthRoute variant='unauthorized'>
				<HomePage />
			</AuthRoute>
		)
	},
	{
		path: '/catalog',
		element: (
			<AuthRoute variant='public'>
				<RedirectCatalogPage />
			</AuthRoute>
		)
	},
	{
		path: '/catalog/:name',
		element: (
			<AuthRoute variant='public'>
				<CatalogPage />
			</AuthRoute>
		)
	},
	{
		path: '/card/:id',
		element: (
			<AuthRoute variant='public'>
				<CardPage />
			</AuthRoute>
		)
	}
])
