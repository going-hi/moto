import { CategoriesEnumModel, Typography, useValidParams } from '@/shared'
import { CatalogList } from './@list'
import { CatalogSort } from './@sort'
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
				<div className='flex justify-between mb-[30px]'>
					<CatalogSort />
				</div>
				<CatalogList />
			</Container>
			<Footer />
		</section>
	)
}
