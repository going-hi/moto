import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, SelectInput, SimpleForm, TextInput } from 'react-admin'
import { EditOrderSchema } from '../model'

export const EditOrder = () => {
	return (
		<Edit resource='order'>
			<SimpleForm resolver={zodResolver(EditOrderSchema)}>
				<TextInput disabled source='id' label='Id' fullWidth />
				<SelectInput
					fullWidth
					source='status'
					label='Статус заказа'
					choices={[
						{
							id: 'new',
							name: 'Новый'
						},
						{
							id: 'processed',
							name: 'В процессе'
						},
						{
							id: 'accepted',
							name: 'Обработанный'
						},
						{
							id: 'executed',
							name: 'Отмененный'
						}
					]}
				/>
			</SimpleForm>
		</Edit>
	)
}
