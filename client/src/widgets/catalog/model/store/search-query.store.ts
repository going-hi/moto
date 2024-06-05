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
	price: {
		default: [string, string]
		state: [string, string]
	}
	type: string
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
			price: {
				default: ['0', '1000000'],
				state: ['1', '0']
			},
			type: ''
		},
		setData: data =>
			set(state => {
				const updatedState: TData & { [key: string]: unknown } =
					state.data

				Object.keys(data).forEach(key => {
					if (
						key !== 'price' &&
						(data[key] || (key === 'sortBy' && data[key] === ''))
					) {
						updatedState[key] = data[key]
					}
				})

				state.data = updatedState
			})
	}))
)
