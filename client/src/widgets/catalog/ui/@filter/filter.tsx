import { useState } from 'react'
import { Select } from '@/shared'
import type { TGetFiltersDto } from '../../model'
import { CatalogTypeRadio } from '../@type-radio'

export const CatalogFilter = ({
	isLoading,
	filters
}: {
	isLoading: boolean
	filters?: TGetFiltersDto
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	if (!filters) {
		return <></>
	}

	return (
		<Select
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			width='w-[99.76dvw]'
			maxHeight='max-h-[200px]'
			label='фильтрация'
			position='left'
			withContainer
		>
			<div className='p-[30px]'>
				<CatalogTypeRadio />
			</div>
		</Select>
	)
}
