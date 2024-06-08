import { zodResolver } from '@hookform/resolvers/zod'
import {
	AutocompleteInput,
	Edit,
	ReferenceInput,
	SimpleForm,
	TextInput
} from 'react-admin'
import { EditReviewSchema } from '../model'

export const EditReview = () => {
	return (
		<Edit>
			<SimpleForm resolver={zodResolver(EditReviewSchema)}>
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
		</Edit>
	)
}
