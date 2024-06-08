import { PageTitle } from '@/shared'
import {
	DateField,
	ReferenceField,
	Show,
	SimpleShowLayout,
	TextField
} from 'react-admin'

export const ReviewShow = () => {
	return (
		<Show title={<PageTitle />}>
			<ReviewShowBody />
		</Show>
	)
}

const ReviewShowBody = () => {
	return (
		<SimpleShowLayout>
			<TextField source='id' label='Id' emptyText='нет' />
			<TextField source='name' label='Имя пользователя' emptyText='нет' />
			<TextField source='text' label='Текст' emptyText='нет' />
			<ReferenceField
				source='product'
				reference='product'
				label='Продукт'
				sortable={false}
				// @ts-expect-error
				link={(par, res) => {
					return `/${res}/${par.id}/show`
				}}
			>
				<TextField
					source='name'
					emptyText='нет'
					label='Название продукта'
				/>
			</ReferenceField>
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
		</SimpleShowLayout>
	)
}
