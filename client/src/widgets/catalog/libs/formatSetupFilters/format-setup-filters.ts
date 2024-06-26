import { TGetFiltersDto } from '../../model'

export const formatSetupFilters = (data: TGetFiltersDto) =>
	Object.keys(data).reduce<{
		[key: string]: {
			[key: string]: boolean
		}
	}>((acc, key) => {
		const arrKeys = key !== 'цена' ? data[key] : []

		const obj = arrKeys.reduce<{ [key: string]: boolean }>((acc, i) => {
			acc[String(i)] = false
			return acc
		}, {})

		if (key !== 'цена') {
			acc[key] = obj
		}

		return acc
	}, {})
