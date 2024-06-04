import { Outlet } from 'react-router-dom'
import { About } from '@/widgets/about'
import { AboutUs } from '@/widgets/about-us'
import { Banner } from '@/widgets/banner'
import { CatalogAccordion } from '@/widgets/catalog-accordion'
import { Faq } from '@/widgets/faq'
import { NewProducts } from '@/widgets/new-products'
import { Popular } from '@/widgets/popular'
import { Reviews } from '@/widgets/reviews'
import { Footer, Wrapper } from '@/layout'

export const HomePage = () => {
	return (
		<Wrapper className='flex gap-y-[10px] flex-col'>
			<Outlet />
			<Banner />
			<CatalogAccordion />
			<Popular />
			<About />
			<NewProducts />
			<AboutUs />
			<Reviews />
			<Faq />
			<Footer />
		</Wrapper>
	)
}
