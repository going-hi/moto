import {
	AutocompleteInput,
	Create,
	ReferenceInput,
	TextInput
} from 'react-admin'
import { SimpleForm } from 'react-admin'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateReviewSchema } from '../model'

export const CreateReview = () => {
	return (
		<Create redirect='list' resource='review'>
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
				<TextInput source='text' label='Текст отзыва' fullWidth />
			</SimpleForm>
		</Create>
	)
}
