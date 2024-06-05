import { Typography } from '@/shared'
import { TGetFiltersDto } from '../../model'
import { CatalogFilterItem } from '../@filter-item'
import { CatalogFilterPrice } from '../@filter-price'
import { CatalogTypeRadio } from '../@type-radio'
import cl from './filter-body.module.css'

const { Title } = Typography

export const CatalogFilterBody = ({ filters }: { filters: TGetFiltersDto }) => {
	return (
		<>
			<CatalogTypeRadio />
			<ul className='flex flex-wrap'>
				{Object.keys(filters).map(objKey => (
					<li className={cl.cell} key={objKey}>
						<Title
							variant='h5'
							className='uppercase -tracking-2per mb-[15px]'
						>
							{objKey}
						</Title>
						{objKey !== 'цена' ? (
							<ul>
								{filters[objKey].map(i => (
									<CatalogFilterItem
										key={i}
										item={i}
										objKey={objKey}
									/>
								))}
							</ul>
						) : (
							<CatalogFilterPrice />
						)}
					</li>
				))}
			</ul>
		</>
	)
}
