import { About } from '@/widgets/about'
import { AboutUs } from '@/widgets/about-us'
import { NewProducts } from '@/widgets/new-products'
import { Popular } from '@/widgets/popular'
import { Reviews } from '@/widgets/reviews'
import { Header, Footer } from '@/layout'

export const HomePage = () => {
	return (
		<div className='bg-red-light flex gap-y-[10px] flex-col'>
			<Header />
			<Popular />
			<About />
			<Reviews />
			<NewProducts />
			<AboutUs />
			<Footer />
		</div>
	)
}
