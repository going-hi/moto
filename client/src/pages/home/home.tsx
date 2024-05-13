import { Popular } from '@/widgets/popular'
import { Header } from '@/layout'

export const HomePage = () => {
	return (
		<div className='bg-[#da2424] min-h-[100dvh]'>
			<Header />
			<Popular />
		</div>
	)
}
