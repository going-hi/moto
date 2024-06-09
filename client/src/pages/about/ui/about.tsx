import { AboutBanner } from '@/widgets/about-banner'
import { Advantages } from '@/widgets/advantages'
import { Assortment } from '@/widgets/assortment'
import { OurExperience } from '@/widgets/our-experience'
import { YourPartner } from '@/widgets/your-partner'
import { Container, Wrapper, Header, Footer } from '@/layout'

export const AboutPage = () => {
	return (
		<Wrapper>
			<Header />
			<AboutBanner />
			<Container bodyClassName='bg-beige py-[60px]'>
				<OurExperience />
				<Advantages />
				<Assortment />
				<YourPartner />
			</Container>
			<Footer />
		</Wrapper>
	)
}
