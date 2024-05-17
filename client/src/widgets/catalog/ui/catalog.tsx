import { CategoriesEnumModel, Typography, useValidParams } from '@/shared'
import { CatalogList } from './@list'
import { Container } from '@/layout'

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
		</section>
	)
}
