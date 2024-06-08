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
			<TextField source='id' label='Id' />
			<TextField source='name' label='Имя пользователя' />
			<TextField source='text' label='Текст' />
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
					emptyText='none'
					label='Название продукта'
				/>
			</ReferenceField>
			<DateField source='createDate' label='Дата создания' />
			<DateField source='updateDate' label='Дата изменения' />
		</SimpleShowLayout>
	)
}
