import { CategoriesEnumModel, Typography, useValidParams } from '@/shared'
import { CatalogList } from './@list'
import { CatalogMore } from './@more'
import { Container, Footer } from '@/layout'

const { Text } = Typography

export const Catalog = () => {
	const { name } = useValidParams({ name: CategoriesEnumModel })

	if (!name) {
		return <Text>Такой категории не существует</Text>
	}

	return (
		<section>
			<Container>
				<CatalogList />
			</Container>
			<Footer />
		</section>
	)
}
