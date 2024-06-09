import { CategoryArr, CategoryTypesMap } from '@/shared'
import { useState } from 'react'
import {
	Edit,
	SelectInput,
	SimpleForm,
	TextInput,
	useRecordContext
} from 'react-admin'

export const EditProduct = () => {
	return (
		<Edit>
			<EditProductBody />
		</Edit>
	)
}

export const EditProductBody = () => {
	const record = useRecordContext()
	const [activeCategory, setActiveCategory] = useState(record.category)

	// @ts-expect-error
	const typesList = CategoryTypesMap[activeCategory] ?? []

	return (
		<SimpleForm>
			<TextInput source='name' label='Название' fullWidth />
			<TextInput source='description' label='Описание' fullWidth />
			<TextInput source='price' label='Цена' fullWidth />
			<TextInput source='brand' label='Бренд' fullWidth />
			<SelectInput
				fullWidth
				label='Категория'
				source='category'
				choices={CategoryArr}
				onChange={e => setActiveCategory(e.target.value)}
			/>
			<SelectInput
				fullWidth
				label='Тип'
				source='type'
				choices={typesList}
			/>
		</SimpleForm>
	)
}
