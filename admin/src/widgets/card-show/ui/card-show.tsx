import { PageTitle } from '@/shared'
import {
	ArrayField,
	Datagrid,
	DateField,
	SimpleShowLayout,
	TextField
} from 'react-admin'
import { Show } from 'react-admin'
import { CardShowImages } from './@images'
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
			<TextField source='id' label='Id' emptyText='none' />
			<TextField source='name' label='Название' emptyText='none' />
			<TextField source='description' label='Описание' emptyText='none' />
			<TextField source='price' label='Цена' emptyText='none' />
			<TextField source='category' label='Категория' emptyText='none' />
			<TextField source='type' label='Тип' emptyText='none' />
			<TextField source='brand' label='Бренд' emptyText='none' />
			<TextField
				source='countOrders'
				label='Количество заказов'
				emptyText='none'
			/>
			<DateField
				source='createDate'
				label='Дата создания'
				emptyText='none'
			/>
			<DateField
				source='updateDate'
				label='Дата изменения'
				emptyText='none'
			/>
			<CardShowImages />
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
