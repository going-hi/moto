type TSortItem = {
	label: string
	value: string
	order: 'ASC' | 'DESC'
}

export const sortItemsArr: TSortItem[] = [
	{
		label: 'по популярности',
		order: 'ASC',
		value: 'popular'
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
