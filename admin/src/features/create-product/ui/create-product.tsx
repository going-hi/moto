import { CategoryArr, CategoryTypesMap } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import {
	ArrayInput,
	Create,
	ImageField,
	ImageInput,
	SelectInput,
	SimpleForm,
	SimpleFormIterator,
	TextInput
} from 'react-admin'
import { CreateProductSchema } from '../model'

export const CreateProduct = () => {
	const [activeCategory, setActiveCategory] = useState('')

	// @ts-expect-error
	const typesList = CategoryTypesMap[activeCategory] ?? []

	return (
		<Create>
			<SimpleForm resolver={zodResolver(CreateProductSchema)}>
				<TextInput label='Название' source='name' fullWidth />
				<TextInput label='Описание' source='description' fullWidth />
				<TextInput label='Цена' source='price' fullWidth />
				<TextInput label='Бренд' source='brand' fullWidth />
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

				<ImageInput
					source='images'
					multiple
					label='Изображения'
					accept='image/png, image/jpeg, image/jpg, image/webp'
				>
					<ImageField source='src' title='title' />
				</ImageInput>
			</SimpleForm>
		</Create>
	)
}
