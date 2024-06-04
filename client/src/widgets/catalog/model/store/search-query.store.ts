import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { type TSortItem, sortItemsArr } from '../data'

type TParamsStore = {
	sort: TSortItem
	setSort: (s: TSortItem) => void
	page: number
	setPage: (p: number) => void
}

export const useSearchQueryStore = create<TParamsStore>()(
	immer(set => ({
		sort: sortItemsArr[0],
		setSort: sort =>
			set(state => {
				state.sort = sort
			}),
		page: 1,
		setPage: page =>
			set(state => {
				state.page = page
			})
	}))
)
