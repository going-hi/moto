import type { TSortBy } from '../types'

export type TSortItem = {
	label: string
	value: TSortBy
	order: 'ASC' | 'DESC'
}

export const sortItemsArr: TSortItem[] = [
	{
		label: 'по умолчанию',
		order: 'ASC',
		value: '*'
	},
	{
		label: 'по популярности',
		order: 'ASC',
		value: 'countOrders'
	},
	{
		label: 'по убыванию цены',
		order: 'DESC',
		value: 'price'
	},
	{
		label: 'по возрастанию цены',
		order: 'ASC',
		value: 'price'
	}
]
