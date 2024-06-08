import { DeliveryMethodsMap, PageTitle, PaymentMethodsMap } from '@/shared'
import {
	ArrayField,
	Datagrid,
	FunctionField,
	ReferenceField,
	Show,
	SimpleShowLayout,
	TextField
} from 'react-admin'

export const OrderShow = () => {
	return (
		<Show title={<PageTitle />}>
			<OrderShowBody />
		</Show>
	)
}

const OrderShowBody = () => {
	return (
		<SimpleShowLayout>
			<TextField source='id' label='Id' />
			<TextField source='name' label='Имя' />
			<TextField source='surname' label='Фамилия' />
			<TextField source='patronymic' label='Отчество' />
			<TextField source='email' label='Почта' />
			<TextField source='phone' label='Телефон' />
			<TextField source='postIndex' label='Почтовый индекс' />
			<TextField source='region' label='Регион' />
			<TextField source='city' label='Город' />
			<TextField source='flat' label='Квартира' />
			<TextField source='district' label='Район' />
			<TextField source='street' label='Улица' />
			<TextField source='home' label='Номер строения' />
			<FunctionField
				label='Способ оплаты'
				// @ts-expect-error
				render={record => PaymentMethodsMap[record.paymentMethod]}
			/>
			<FunctionField
				label='Способ доставки'
				// @ts-expect-error
				render={record => DeliveryMethodsMap[record.shippingMethod]}
			/>
			<TextField source='status' label='Статус' />
			<TextField source='total' label='Итоговая сумма' />
			<TextField source='createDate' label='Дата создания' />
			<TextField source='updateDate' label='Дата изменения' />
			<ArrayField source='items'>
				<Datagrid bulkActionButtons={false}>
					<TextField source='count' label='Количество товаров' />
					<TextField source='price' label='Цена продуктов' />
					<ReferenceField
						source='product'
						reference='product'
						sortable={false}
						label='Продукт'
						// @ts-expect-error
						link={(par, res) => `/${res}/${par.id}/show`}
					>
						<TextField source='name' />
					</ReferenceField>
				</Datagrid>
			</ArrayField>
		</SimpleShowLayout>
	)
}
