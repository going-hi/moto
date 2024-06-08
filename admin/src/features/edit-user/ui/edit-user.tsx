import { EditToolbar } from '@/shared'
import { Edit, SimpleForm, TextInput } from 'react-admin'

export const EditUser = () => {
	return (
		<Edit>
			<SimpleForm toolbar={<EditToolbar />}>
				<TextInput source='id' fullWidth disabled />
				<TextInput source='name' fullWidth disabled />
				<TextInput source='surname' fullWidth disabled />
			</SimpleForm>
		</Edit>
	)
}
