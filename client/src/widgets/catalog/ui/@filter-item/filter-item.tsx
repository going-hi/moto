import { Checkbox, Typography } from '@/shared'
import { useSearchFiltersStore } from '../../model'

const { Text } = Typography

export const CatalogFilterItem = ({
	objKey,
	item
}: {
	objKey: string
	item: string | number
}) => {
	const { data, toggleActive } = useSearchFiltersStore()

	const filterName = data[objKey]
	const filterKey = String(item)
	const value = !!filterName && !!filterKey && filterName[filterKey]

	return (
		<li className='mb-[10px] last:mb-0 ' key={item}>
			<label
				htmlFor={objKey + item}
				className='flex gap-x-[10px] cursor-pointer items-center'
			>
				<Checkbox
					className='!w-[17px] !h-[17px] border-[2px] !rounded-[2px]'
					field={{
						value,
						onChange: () => toggleActive(objKey, filterKey)
					}}
					id={objKey + item}
					icon={
						<span className='block w-[9px] h-[9px] rounded-[50%] bg-black' />
					}
				/>
				<Text>{item}</Text>
			</label>
		</li>
	)
}
