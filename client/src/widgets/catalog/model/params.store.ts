import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { type TSortItem, sortItemsArr } from './sort.data'

type TParamsStore = {
	page: number
	incrementPage: () => void
	sort: TSortItem
	setSort: (s: TSortItem) => void
}

export const useParamsStore = create<TParamsStore>()(
	immer(set => ({
		page: 1,
		sort: sortItemsArr[0],
		incrementPage: () =>
			set(state => {
				state.page += 1
			}),
		setSort: sort =>
			set(state => {
				state.sort = sort
			})
	}))
)
