import type { TNavItem } from '@/shared'

export const profileMenuItemsArr: TNavItem[] = [
	{ label: 'ДАННЫЕ АККАУНТЫ', path: '/profile/edit' },
	{
		label: 'МОИ ЗАКАЗЫ',
		path: '/profile/orders'
	},
	{
		label: 'ИЗБРАННОЕ',
		path: '/favourites'
	}
]
