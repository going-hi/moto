import clsx from 'clsx'
import { useState } from 'react'
import { Typography, Radio, Select } from '@/shared'
import { type TSortItem, sortItemsArr, useSearchQueryStore } from '../../model'

const { Text } = Typography

export const CatalogSort = () => {
	const {
		setSort,
		sort: { label }
	} = useSearchQueryStore()

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const choose = (i: TSortItem) => {
		if (i.label === label) return
		setIsOpen(false)
		setSort(i)
	}

	return (
		<Select
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			label={label}
			width='w-[280px]'
			maxHeight='max-h-[500px]'
			position='right'
		>
			<ul className='p-[20px]'>
				{sortItemsArr.map(i => (
					<li
						onClick={() => choose(i)}
						className={clsx(
							'flex gap-x-[10px] items-center',
							i.label !== label && 'cursor-pointer'
						)}
						key={i.label}
					>
						<Radio name='sort' isChecked={i.label === label} />
						<Text className='font-medium'>{i.label}</Text>
					</li>
				))}
			</ul>
		</Select>
	)
}
