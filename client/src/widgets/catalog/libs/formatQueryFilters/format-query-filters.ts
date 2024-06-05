import { TStoreData } from '../../model'

export const formatQueryFilters = (data: TStoreData) =>
	Object.keys(data).reduce<{ [key: string]: string[] }>((acc, name) => {
		const formattedCategoryArr = Object.keys(data[name]).reduce<string[]>(
			(acc, i) => {
				if (data[name][i]) {
					acc.push(i)
				}
				return acc
			},
			[]
		)

		if (formattedCategoryArr.length) {
			acc[name] = formattedCategoryArr
		}

		return acc
	}, {})
