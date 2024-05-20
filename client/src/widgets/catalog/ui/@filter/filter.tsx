import { useState } from 'react'
import { Select } from '@/shared'

export const CatalogFilter = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<Select
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			width='w-[100dvw]'
			maxHeight='max-h-[200px]'
			label='фильтрация'
			position='left'
		>
			Фильтрация
		</Select>
	)
}
