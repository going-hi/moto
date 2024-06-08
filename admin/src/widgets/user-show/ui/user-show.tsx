import { PageTitle, RolesMap } from '@/shared'
import {
	ArrayField,
	Datagrid,
	DateField,
	FunctionField,
	Show,
	SimpleShowLayout,
	TextField
} from 'react-admin'

export const UserShow = () => {
	return (
		<Show title={<PageTitle field='name' />}>
			<UserShowBody />
		</Show>
	)
}

export const UserShowBody = () => {
	return (
		<SimpleShowLayout>
			<TextField source='id' />
			<TextField source='name' label='Имя' />
			<TextField source='surname' label='Фамилия' />
			<TextField source='email' label='Почта' />
			<TextField source='phone' label='Телефон' />
			<FunctionField
				render={
					// @ts-expect-error
					record => RolesMap[record.role]
				}
				label='Роль'
			/>
			<ArrayField source='orders' label='Информация о заказах'>
				<Datagrid
					bulkActionButtons={false}
					rowClick={id => `/order/${id}/show`}
				>
					<TextField source='id' label='Id' />
					<TextField source='total' label='Сумма заказа' />
					<DateField source='createDate' label='Дата заказа' />
				</Datagrid>
			</ArrayField>
			<DateField source='createDate' label='Дата регистрации' />
			<DateField source='updateDate' label='Дата изменения' />
		</SimpleShowLayout>
	)
}
