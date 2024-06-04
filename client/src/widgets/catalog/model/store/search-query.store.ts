import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { sortItemsArr } from '../data'
import type { TSortBy, TSortOrder } from '../types'

type TData = {
	sortBy: TSortBy
	page: number
	q: string
	sortOrder: TSortOrder
	enabled: boolean
}

type TParamsStore = {
	data: TData
	setData: (data: Partial<TData> & { [key: string]: unknown }) => void
}

export const useSearchQueryStore = create<TParamsStore>()(
	immer(set => ({
		data: {
			sortBy: sortItemsArr[0].value,
			page: 1,
			q: '',
			sortOrder: 'ASC',
			enabled: false
		},
		setData: data =>
			set(state => {
				const updatedState: TData & { [key: string]: unknown } =
					state.data

				Object.keys(data).forEach(key => {
					if (data[key]) {
						updatedState[key] = data[key]
					}
				})

				state.data = updatedState
			})
	}))
)
