import { createBrowserRouter } from 'react-router-dom'
import { CardPage } from '@/pages/card'
import { CatalogPage, RedirectCatalogPage } from '@/pages/catalog'
import { FavouritesPage } from '@/pages/favourites'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { ProfilePage, RedirectProfilePage } from '@/pages/profile'
import { AuthForm } from '@/widgets/auth-form'
import { EditProfile } from '@/widgets/edit-profile'
import { MyOrders } from '@/widgets/my-orders'
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
		path: '/profile',
		element: (
			<AuthRoute variant='authorized'>
				<ProfilePage />
			</AuthRoute>
		),
		children: [
			{
				path: 'edit',
				element: (
					<AuthRoute variant='authorized'>
						<EditProfile />
					</AuthRoute>
				)
			},
			{
				path: '',
				element: (
					<AuthRoute variant='authorized'>
						<RedirectProfilePage />
					</AuthRoute>
				)
			},
			{
				path: 'orders',
				element: (
					<AuthRoute variant='authorized'>
						<MyOrders />
					</AuthRoute>
				)
			}
		]
	},
	{
		path: '*',
		element: <NotFoundPage />
	}
])
