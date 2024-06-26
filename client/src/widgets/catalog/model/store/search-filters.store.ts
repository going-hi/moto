import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { formatSetupFilters } from '../../libs/formatSetupFilters'
import { TGetFiltersDto } from '../types'
import type { TStoreData } from '../types'

type TSearchFiltersStore = {
	data: TStoreData
	setData: (d: TGetFiltersDto) => void
	toggleActive: (n: string, key: string) => void
}

export const useSearchFiltersStore = create<TSearchFiltersStore>()(
	immer(set => ({
		data: {},
		setData: data =>
			set(state => {
				state.data = formatSetupFilters(data)
			}),
		toggleActive: (filterName, filterKey) =>
			set(state => {
				const value = state.data[filterName][filterKey]
				state.data[filterName][filterKey] = !value
			})
	}))
)
