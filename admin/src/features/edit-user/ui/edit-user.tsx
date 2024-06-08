import { EditToolbar } from '@/shared'
import { Edit, SelectInput, SimpleForm, TextInput } from 'react-admin'
import { EditUserSchema } from '../model'
import { zodResolver } from '@hookform/resolvers/zod'

export const EditUser = () => {
	return (
		<Edit resource='user'>
			<SimpleForm
				toolbar={<EditToolbar />}
				resolver={zodResolver(EditUserSchema)}
			>
				<TextInput source='id' fullWidth disabled />
				<TextInput source='name' fullWidth disabled />
				<TextInput source='surname' fullWidth disabled />
				<SelectInput
					source='role'
					choices={[
						{
							id: 'user',
							name: 'Пользователь'
						},
						{
							id: 'admin',
							name: 'Администратор'
						}
					]}
				/>
			</SimpleForm>
		</Edit>
	)
}
