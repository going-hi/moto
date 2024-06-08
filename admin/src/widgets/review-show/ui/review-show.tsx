import { PageTitle } from '@/shared'
import { ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin'

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
			<TextField source='name' />
			<TextField source='text' />
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
				<TextField source='name' emptyText='none' />
			</ReferenceField>
		</SimpleShowLayout>
	)
}
