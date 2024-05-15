import { Popular } from '@/widgets/popular'
import { Reviews } from '@/widgets/reviews'
import { Header } from '@/layout'

export const HomePage = () => {
	return (
		<div className='bg-red-light'>
			<Header />
			<Popular />
			<Reviews />
		</div>
	)
}
