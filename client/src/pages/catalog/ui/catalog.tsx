import { useEffect } from 'react'
import { Catalog } from '@/widgets/catalog'
import { CatalogHeader, useParamNameStore } from '@/widgets/catalog-header'
import { Typography, useValidParams, CategoriesEnumModel } from '@/shared'
import { Footer, Header } from '@/layout'

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
		<div className='bg-red-light pb-[10px]'>
			<Header />
			<CatalogHeader />
			<Catalog />
			<Footer />
		</div>
	)
}
