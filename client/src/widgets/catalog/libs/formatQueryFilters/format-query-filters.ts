import { TStoreData } from '../../model'

export const formatQueryFilters = (data: TStoreData) => {
	const str = Object.keys(data).reduce((acc, key) => {
		const filteredValues = Object.keys(data[key]).filter(i => data[key][i])

		const str = filteredValues.reduce(
			(acc, i) => acc + `filters[${key}]=${i}&`,
			''
		)

		return acc + str
	}, '')

	return str.slice(0, -1)
}
