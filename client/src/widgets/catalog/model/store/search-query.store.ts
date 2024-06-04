import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { sortItemsArr } from '../data'
import type { TSortBy, TSortOrder } from '../types'

type TData = {
	sortBy: TSortBy
	page: string
	q: string
	sortOrder: TSortOrder
	enabled: boolean
	price: [string, string]
}

type TParamsStore = {
	data: TData
	setData: (data: Partial<TData> & { [key: string]: unknown }) => void
}

export const useSearchQueryStore = create<TParamsStore>()(
	immer(set => ({
		data: {
			sortBy: sortItemsArr[0].value,
			page: '1',
			q: '',
			sortOrder: 'ASC',
			enabled: false,
			price: ['0', '1000000']
		},
		setData: data =>
			set(state => {
				const updatedState: TData & { [key: string]: unknown } =
					state.data

				Object.keys(data).forEach(key => {
					if (data[key] || (key === 'sortBy' && data[key] === '')) {
						updatedState[key] = data[key]
					}
				})

				state.data = updatedState
			})
	}))
)
