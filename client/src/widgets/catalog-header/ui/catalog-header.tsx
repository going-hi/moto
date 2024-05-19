import { Typography } from '@/shared'
import { CategoriesRuMap } from '@/shared'
import { useParamNameStore } from '../model'
import { CatalogHeaderList } from './@list'
import { Container } from '@/layout'

const { Title } = Typography

export const CatalogHeader = () => {
	const { name } = useParamNameStore()

	return (
		<Container className='mb-[60px] pl-[400px]'>
			<div className='text-white'>
				<Title className='leading-[120px]' variant='h1'>
					{CategoriesRuMap[name]}
				</Title>
				<CatalogHeaderList />
			</div>
		</Container>
	)
}
