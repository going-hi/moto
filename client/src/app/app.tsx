import '@/app/styles/index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { envConfig } from '@/shared'
import { ReactQueryProvider } from './providers/react-query.provider'
import { RouterProvider } from './providers/router.provider'

export const App = () => {
	return (
		<>
			<ReactQueryProvider>
				<RouterProvider />
				{envConfig.getValue('MODE') === 'development' && (
					<ReactQueryDevtools />
				)}
			</ReactQueryProvider>
		</>
	)
}
