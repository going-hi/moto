import { About } from '@/widgets/about'
import { AboutUs } from '@/widgets/about-us'
import { Banner } from '@/widgets/banner'
import { NewProducts } from '@/widgets/new-products'
import { Popular } from '@/widgets/popular'
import { Reviews } from '@/widgets/reviews'
import { Footer } from '@/layout'

export const HomePage = () => {
	return (
		<div className='bg-red-light flex gap-y-[10px] flex-col'>
			<Banner />
			<Popular />
			<About />
			<Reviews />
			<NewProducts />
			<AboutUs />
			<Footer />
		</div>
	)
}
