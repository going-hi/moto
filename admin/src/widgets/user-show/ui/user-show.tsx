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
import { UserShowEmptyOrders } from './@empty-orders'

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
			<TextField source='id' emptyText='нет' />
			<TextField source='name' label='Имя' emptyText='нет' />
			<TextField source='surname' label='Фамилия' emptyText='нет' />
			<TextField source='email' label='Почта' emptyText='нет' />
			<TextField source='phone' label='Телефон' emptyText='нет' />
			<FunctionField
				render={
					// @ts-expect-error
					record => RolesMap[record.role]
				}
				label='Роль'
				emptyText='нет'
			/>
			<ArrayField source='orders' label='' emptyText='dkdj'>
				<Datagrid
					bulkActionButtons={false}
					rowClick={id => `/order/${id}/show`}
					empty={<UserShowEmptyOrders />}
				>
					<TextField source='id' label='Id' emptyText='нет' />
					<TextField
						source='total'
						label='Сумма заказа'
						emptyText='нет'
					/>
					<DateField
						source='createDate'
						label='Дата заказа'
						emptyText='нет'
					/>
				</Datagrid>
			</ArrayField>
			<DateField
				source='createDate'
				label='Дата регистрации'
				emptyText='нет'
			/>
			<DateField
				source='updateDate'
				label='Дата изменения'
				emptyText='нет'
			/>
		</SimpleShowLayout>
	)
}
