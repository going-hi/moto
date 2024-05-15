import { About } from '@/widgets/about'
import { NewProducts } from '@/widgets/new-products'
import { Popular } from '@/widgets/popular'
import { Reviews } from '@/widgets/reviews'
import { Header, Footer } from '@/layout'

export const HomePage = () => {
	return (
		<div className='bg-red-light'>
			<Header />
			<Popular />
			<About />
			<Reviews />
			<NewProducts />
			<Footer />
		</div>
	)
}
