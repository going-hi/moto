import '@/app/styles/index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { envConfig, Toast } from '@/shared'
import { ReactQueryProvider } from './providers/react-query.provider'
import { RouterProvider } from './providers/router.provider'
import 'react-toastify/dist/ReactToastify.min.css'

export const App = () => {
	return (
		<>
			<ReactQueryProvider>
				<RouterProvider />
				{envConfig.getValue('MODE') === 'development' && (
					<ReactQueryDevtools />
				)}
				<Toast />
			</ReactQueryProvider>
		</>
	)
}
