import { useEffect } from 'react'
import { Catalog } from '@/widgets/catalog'
import { CatalogHeader } from '@/widgets/catalog-header'
import { useParamNameStore } from '@/entities/catalog'
import { Typography, useValidParams, CategoriesEnumModel } from '@/shared'
import { Footer, Header, Wrapper } from '@/layout'

const { Text } = Typography

export const CatalogPage = () => {
	const { name } = useValidParams({ name: CategoriesEnumModel })

	const { setName } = useParamNameStore()

	useEffect(() => {
		setName(name ?? '')
	}, [name, setName])

	if (!name) {
		return <Text>Такой категории не существует</Text>
	}

	return (
		<Wrapper>
			<Header />
			<CatalogHeader />
			<Catalog />
			<Footer />
		</Wrapper>
	)
}
