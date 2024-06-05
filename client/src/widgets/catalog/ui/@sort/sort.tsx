import clsx from 'clsx'
import { useState } from 'react'
import { Typography, Radio, Select } from '@/shared'
import { type TSortItem, sortItemsArr, useSearchQueryStore } from '../../model'

const { Text } = Typography

export const CatalogSort = () => {
	const {
		setData,
		data: { sortBy, sortOrder }
	} = useSearchQueryStore()

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const choose = (i: TSortItem) => {
		if (i.value === sortBy && i.order === sortOrder) return
		setIsOpen(false)
		setData({ sortBy: i.value, sortOrder: i.order })
	}

	return (
		<Select
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			label={
				sortItemsArr.find(
					i => i.value === sortBy && i.order === sortOrder
				)?.label ?? ''
			}
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
							(i.value !== sortBy ||
								(i.value === 'price' &&
									i.order !== sortOrder)) &&
								'cursor-pointer'
						)}
						key={i.label}
					>
						<Radio
							name='sort'
							isChecked={
								i.value === sortBy && i.order === sortOrder
							}
							variant='box'
						/>
						<Text className='font-medium'>{i.label}</Text>
					</li>
				))}
			</ul>
		</Select>
	)
}
