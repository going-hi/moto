import { CategoriesEnumModel, Typography, useValidParams } from '@/shared'
import { CatalogFilter } from './@filter'
import { CatalogHeader } from './@header'
import { CatalogList } from './@list'
import { CatalogSort } from './@sort'
import { Container, Footer, Header } from '@/layout'

const { Text } = Typography

export const Catalog = () => {
	const { name } = useValidParams({ name: CategoriesEnumModel })

	if (!name) {
		return <Text>Такой категории не существует</Text>
	}

	return (
		<>
			<Header />
			<CatalogHeader name={name} />
			<div className='relative'>
				<Container>
					<div className='flex justify-between mb-[30px]'>
						<CatalogFilter />
						<CatalogSort />
					</div>
				</Container>
			</div>
			<CatalogList />
			<Footer />
		</>
	)
}