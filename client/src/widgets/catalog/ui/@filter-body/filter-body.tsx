import { useState } from 'react'
import { Typography, Button } from '@/shared'
import { TGetFiltersDto } from '../../model'
import { CatalogFilterItem } from '../@filter-item'
import { CatalogFilterPrice } from '../@filter-price'
import { CatalogTypeRadio } from '../@type-radio'
import cl from './filter-body.module.css'

const { Title } = Typography

export const CatalogFilterBody = ({ filters }: { filters: TGetFiltersDto }) => {
	const [filtersPage, setFiltersPage] = useState<number>(1)

	const filtersArr = Object.keys(filters)

	return (
		<>
			<CatalogTypeRadio />
			<ul className='flex flex-wrap'>
				{filtersArr.slice(0, 10 * filtersPage).map(objKey => (
					<li className={cl.cell} key={objKey}>
						<Title
							variant='h5'
							className='uppercase -tracking-2per mb-[15px] leading-[25px]'
						>
							{objKey}
						</Title>
						{objKey !== 'цена' ? (
							<ul className='max-h-[270px] overflow-y-auto'>
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
			{filtersArr.length > filtersPage * 10 && (
				<div className='flex justify-center mb-[30px] mt-[20px]'>
					<Button
						onClick={() => setFiltersPage(prev => prev + 1)}
						variant='parentheses-button'
						isMain
					>
						БОЛЬШЕ ХАРАКТЕРИСТИК
					</Button>
				</div>
			)}
		</>
	)
}
