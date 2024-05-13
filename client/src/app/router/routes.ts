import { FC } from 'react'
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
	}
]
