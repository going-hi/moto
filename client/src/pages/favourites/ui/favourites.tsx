import { Favourites } from '@/widgets/favourites'
import { OtherModels } from '@/widgets/other-models'
import { Wrapper, Footer, Header } from '@/layout'

export const FavouritesPage = () => {
	return (
		<Wrapper>
			<Header />
			<Favourites />
			<OtherModels body={{}} />
			<Footer />
		</Wrapper>
	)
}
