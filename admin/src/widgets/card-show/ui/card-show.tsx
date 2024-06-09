import { PageTitle } from '@/shared'
import {
	ArrayField,
	Datagrid,
	DateField,
	ImageField,
	SimpleShowLayout,
	TextField
} from 'react-admin'
import { Show } from 'react-admin'
import { EmptyCharacteristic } from './@empty-characteristics'

export const CardShow = () => {
	return (
		<Show title={<PageTitle />}>
			<CardShowBody />
		</Show>
	)
}

export const CardShowBody = () => {
	return (
		<SimpleShowLayout>
			<TextField source='id' label='Id' emptyText='нет' />
			<TextField source='name' label='Название' emptyText='нет' />
			<TextField source='description' label='Описание' emptyText='нет' />
			<TextField source='price' label='Цена' emptyText='нет' />
			<TextField source='category' label='Категория' emptyText='нет' />
			<TextField source='type' label='Тип' emptyText='нет' />
			<TextField source='brand' label='Бренд' emptyText='нет' />
			<TextField
				source='countOrders'
				label='Количество заказов'
				emptyText='нет'
			/>
			<DateField
				source='createDate'
				label='Дата создания'
				emptyText='нет'
			/>
			<DateField
				source='updateDate'
				label='Дата изменения'
				emptyText='нет'
			/>
			<ImageField source='images' src='url' title='desc' />
			<ArrayField source='characteristics' label=''>
				<Datagrid
					bulkActionButtons={false}
					empty={<EmptyCharacteristic />}
				>
					<TextField
						sortable={false}
						source='key'
						label='Название характеристики'
					/>
					<TextField
						sortable={false}
						source='value'
						label='Значение'
					/>
				</Datagrid>
			</ArrayField>
		</SimpleShowLayout>
	)
}
