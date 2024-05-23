import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { reactQueryConfig } from '@/shared/config'

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
	const client = new QueryClient(reactQueryConfig)

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
