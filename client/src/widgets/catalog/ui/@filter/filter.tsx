import { useState } from 'react'
import { Select, Typography, Icon } from '@/shared'
import type { TGetFiltersDto } from '../../model'
import { CatalogFilterBody } from '../@filter-body'

const { Text } = Typography

export const CatalogFilter = ({
	isLoading,
	filters
}: {
	isLoading: boolean
	filters?: TGetFiltersDto
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<Select
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			width='w-[99.76dvw]'
			maxHeight='max-h-[70dvh] overflow-y-auto'
			label='фильтрация'
			position='left'
			withContainer
		>
			<div className='py-[32px]'>
				{isLoading ? (
					<div className='flex justify-center'>
						<Icon
							className='w-[40px] h-[40px] animate-spin-1000'
							name='Loading'
						/>
					</div>
				) : filters ? (
					<CatalogFilterBody filters={filters} />
				) : (
					<>
						<Text className='text-[20px] font-bold uppercase'>
							Фильтров нет!
						</Text>
					</>
				)}
			</div>
		</Select>
	)
}
