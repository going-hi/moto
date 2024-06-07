import { DatagridConfigurable, List, TextField } from 'react-admin'
import { Actions } from '@/shared'

export const CardList = () => {
	return (
		<List
			actions={<Actions />}
			resource='product'
			sort={{ field: 'name', order: 'ASC' }}
		>
			<DatagridConfigurable rowClick={(id, res) => `/${res}/${id}/show`}>
				<TextField source='name' label='Название' />
				<TextField source='price' label='Цена' />
				<TextField source='category' label='Категория' />
				<TextField source='type' label='Тип' sortable={false} />
				<TextField source='countOrders' label='Количество заказов' />
			</DatagridConfigurable>
		</List>
	)
}
