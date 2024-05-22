import type { QueryClientConfig } from '@tanstack/react-query'

export const reactQueryConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			throwOnError: true
		}
	}
}
