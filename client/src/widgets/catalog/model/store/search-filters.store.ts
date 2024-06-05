import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { formatSetupFilters } from '../../libs/formatSetupFilters'
import { TGetFiltersDto } from '../types'

type TData = {
	[key: string]: {
		[key: string]: boolean
	}
}

type TSearchFiltersStore = {
	data: TData
	setData: (d: TGetFiltersDto) => void
}

export const useSearchFiltersStore = create<TSearchFiltersStore>()(
	immer(set => ({
		data: {},
		setData: data =>
			set(state => {
				state.data = formatSetupFilters(data)
			})
	}))
)
