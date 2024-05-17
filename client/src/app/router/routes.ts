import { FC } from 'react'
import { CatalogPage, RedirectCatalogPage } from '@/pages/catalog'
import { HomePage } from '@/pages/home'

type TRouteItem = {
	Page: FC
	isPrivate?: boolean
	path: string
}

export const routes: TRouteItem[] = [
	{
		Page: HomePage,
		path: '/'
	},
	{
		Page: CatalogPage,
		path: '/catalog/:name'
	},
	{
		Page: RedirectCatalogPage,
		path: '/catalog/'
	}
]
