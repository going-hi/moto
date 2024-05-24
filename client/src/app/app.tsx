import '@/app/styles/index.css'
import { ReactQueryProvider } from './providers/react-query.provider'
import { RouterProvider } from './providers/router.provider'

export const App = () => {
	return (
		<>
			<ReactQueryProvider>
				<RouterProvider />
			</ReactQueryProvider>
		</>
	)
}
