import type { QueryClientConfig } from 'react-query'

export const reactQueryConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			keepPreviousData: true
		}
	}
}
