import { createBrowserRouter } from 'react-router-dom'
import { CardPage } from '@/pages/card'
import { CatalogPage, RedirectCatalogPage } from '@/pages/catalog'
import { FavouritesPage } from '@/pages/favourites'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { AuthForm } from '@/widgets/auth-form'
import { ResetPasswordForm } from '@/widgets/reset-password-form'
import { AuthRoute } from '@/features/auth-user'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<AuthRoute variant='public'>
				<HomePage />
			</AuthRoute>
		),
		children: [
			{
				path: '/auth',
				element: (
					<AuthRoute variant='unauthorized'>
						<AuthForm />
					</AuthRoute>
				)
			},
			{
				path: '/auth/reset',
				element: (
					<AuthRoute variant='unauthorized'>
						<ResetPasswordForm />
					</AuthRoute>
				)
			}
		]
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
	},
	{
		path: '/favourites',
		element: (
			<AuthRoute variant='authorized'>
				<FavouritesPage />
			</AuthRoute>
		)
	},
	{
		path: '*',
		element: <NotFoundPage />
	}
])
