import { CategoryArr, CategoryTypesMap } from '@/shared'
import { useState } from 'react'
import {
	ArrayInput,
	Edit,
	ImageField,
	ImageInput,
	SelectInput,
	SimpleForm,
	SimpleFormIterator,
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
			{!!typesList.length && (
				<SelectInput
					fullWidth
					label='Тип'
					source='type'
					choices={typesList}
				/>
			)}
			<ArrayInput
				source='characteristics'
				fullWidth
				label='Характеристики'
			>
				<SimpleFormIterator fullWidth>
					<TextInput source='key' label='Название' fullWidth />
					<TextInput source='value' label='Значение' fullWidth />
				</SimpleFormIterator>
			</ArrayInput>

			<ArrayInput source='images' label='Изображения'>
				<SimpleFormIterator fullWidth>
					<ImageField source='url' />
				</SimpleFormIterator>
			</ArrayInput>
			<ImageInput
				source='newImages'
				multiple
				label='Добавление изображений'
				accept='image/png, image/jpeg, image/jpg, image/webp'
			>
				<ImageField source='src' title='title' />
			</ImageInput>
		</SimpleForm>
	)
}
