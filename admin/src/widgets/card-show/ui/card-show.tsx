import { PageTitle } from '@/shared'
import {
	ArrayField,
	Datagrid,
	DateField,
	FunctionField,
	ImageField,
	SimpleShowLayout,
	TextField
} from 'react-admin'
import { Show } from 'react-admin'
import { EmptyCharacteristic } from './@empty-characteristics'
import { CategoryArr, CategoryTypesMap } from '@/shared'

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
			<TextField />
			<FunctionField
				label='Категория'
				emptyText='нет'
				// @ts-expect-error
				render={record =>
					// @ts-ignore
					CategoryArr.find(i => i.id === record.category)?.name
				}
			/>

			<FunctionField
				label='Тип'
				emptyText='нет'
				// @ts-expect-error
				render={record =>
					// @ts-expect-error
					CategoryTypesMap[record.category]?.find(
						// @ts-expect-error
						i => i.id === record.type
					)?.name
				}
			/>
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
			<ImageField
				source='images'
				src='url'
				title='desc'
				label='Изображения'
			/>
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
