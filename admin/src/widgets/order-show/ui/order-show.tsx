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
		<Show title={<PageTitle field='id' />}>
			<OrderShowBody />
		</Show>
	)
}

const OrderShowBody = () => {
	return (
		<SimpleShowLayout>
			<TextField source='id' label='Id' emptyText='нет' />
			<TextField source='name' label='Имя' emptyText='нет' />
			<TextField source='surname' label='Фамилия' emptyText='нет' />
			<TextField source='patronymic' label='Отчество' emptyText='нет' />
			<TextField source='email' label='Почта' emptyText='нет' />
			<TextField source='phone' label='Телефон' emptyText='нет' />
			<TextField
				source='postIndex'
				label='Почтовый индекс'
				emptyText='нет'
			/>
			<TextField source='region' label='Регион' emptyText='нет' />
			<TextField source='city' label='Город' emptyText='нет' />
			<TextField source='flat' label='Квартира' emptyText='нет' />
			<TextField source='district' label='Район' emptyText='нет' />
			<TextField source='street' label='Улица' emptyText='нет' />
			<TextField source='home' label='Номер строения' emptyText='нет' />
			<FunctionField
				label='Способ оплаты'
				// @ts-expect-error
				render={record => PaymentMethodsMap[record.paymentMethod]}
				emptyText='нет'
			/>
			<FunctionField
				label='Способ доставки'
				// @ts-expect-error
				render={record => DeliveryMethodsMap[record.shippingMethod]}
				emptyText='нет'
			/>
			<TextField source='status' label='Статус' emptyText='нет' />
			<TextField source='total' label='Итоговая сумма' emptyText='нет' />
			<TextField
				source='createDate'
				label='Дата создания'
				emptyText='нет'
			/>
			<TextField
				source='updateDate'
				label='Дата изменения'
				emptyText='нет'
			/>
			<ArrayField source='items'>
				<Datagrid bulkActionButtons={false}>
					<TextField
						source='count'
						label='Количество товаров'
						emptyText='нет'
					/>
					<TextField
						source='price'
						label='Цена продуктов'
						emptyText='нет'
					/>
					<ReferenceField
						source='product'
						reference='product'
						sortable={false}
						label='Продукт'
						// @ts-expect-error
						link={(par, res) => `/${res}/${par.id}/show`}
					>
						<TextField source='name' emptyText='нет' />
					</ReferenceField>
				</Datagrid>
			</ArrayField>
		</SimpleShowLayout>
	)
}
