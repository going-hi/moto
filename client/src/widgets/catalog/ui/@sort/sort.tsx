import clsx from 'clsx'
import { useState } from 'react'
import { Typography, Radio } from '@/shared'
import { type TSortItem, sortItemsArr, useParamsStore } from '../../model'

const { Text } = Typography

export const CatalogSort = () => {
	const {
		setSort,
		sort: { label }
	} = useParamsStore()

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const choose = (i: TSortItem) => {
		if (i.label === label) return
		setIsOpen(false)
		setSort(i)
	}

	return (
		<>
			<div
				className={clsx(
					'fixed w-[100dvw] h-[100dvh] z-20 top-0 left-0 right-0 bottom-0',
					isOpen ? 'block' : 'hidden'
				)}
				onClick={() => setIsOpen(false)}
			/>
			<div
				className='text-[18px] relative w-[270px]'
				onClick={e => e.stopPropagation()}
			>
				<div
					className='flex justify-end gap-x-[10px] items-center cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}
				>
					<Text className='text-white font-bold text-[18px] uppercase'>
						{label}
					</Text>
					<img src='/arrow-down.svg' alt='sort' />
				</div>
				<div
					className={clsx(
						'bg-beige  absolute top-[30px] right-0 z-30 w-full overflow-hidden duration-700',
						isOpen ? 'max-h-[500px]' : 'max-h-0'
					)}
				>
					<ul className='p-[20px]'>
						{sortItemsArr.map(i => (
							<li
								onClick={() => choose(i)}
								className={clsx(
									'flex gap-x-[10px] items-center',
									i.label !== label && 'cursor-pointer'
								)}
								key={i.value}
							>
								<Radio
									name='sort'
									isChecked={i.label === label}
								/>
								<Text className='font-medium'>{i.label}</Text>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
