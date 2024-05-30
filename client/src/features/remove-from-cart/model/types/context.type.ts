import type { Context } from 'react'

export type TContext = Context<{
	isLoading: boolean
	setIsLoading: (l: boolean) => void
}>
