import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TParamNameStore = {
	name: string
	setName: (n: string) => void
}

export const useParamNameStore = create<TParamNameStore>()(
	immer(set => ({
		name: '',
		setName: name =>
			set(state => {
				state.name = name
			})
	}))
)
