import {
	AutocompleteInput,
	Create,
	ReferenceInput,
	SelectInput,
	TextField,
	TextInput
} from 'react-admin'
import { SimpleForm } from 'react-admin'
import { RichTextInput } from 'ra-input-rich-text'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateReviewSchema } from '../model'

export const CreateReview = () => {
	return (
		<Create redirect='list'>
			<SimpleForm resolver={zodResolver(CreateReviewSchema)}>
				<TextInput fullWidth source='name' label='Имя человека' />
				<ReferenceInput
					source='product'
					reference='product'
					sort={{ field: 'name', order: 'ASC' }}
					label='Продукты'
				>
					<AutocompleteInput
						fullWidth
						source='name'
						optionValue='id'
						optionText='name'
						label='Продукт'
					/>
				</ReferenceInput>
				<RichTextInput
					source='text'
					label='Текст отзыва'
					toolbar={<></>}
					fullWidth
				/>
			</SimpleForm>
		</Create>
	)
}
