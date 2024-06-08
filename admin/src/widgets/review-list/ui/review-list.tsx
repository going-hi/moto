import {
	DatagridConfigurable,
	List,
	ReferenceField,
	TextField
} from 'react-admin'
import { Actions } from '@/shared'

export const ReviewList = () => {
	return (
		<List
			actions={<Actions />}
			resource='review'
			sort={{ field: 'createDate', order: 'ASC' }}
		>
			<DatagridConfigurable rowClick={(id, res) => `/${res}/${id}/show`}>
				<TextField
					source='name'
					label='Имя покупателя'
					emptyText='нет'
				/>
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
					<TextField source='name' emptyText='нет' />
				</ReferenceField>
			</DatagridConfigurable>
		</List>
	)
}
