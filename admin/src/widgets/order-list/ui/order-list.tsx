import { Actions } from '@/shared'
import { DatagridConfigurable, List, TextField } from 'react-admin'

export const OrderList = () => {
	return (
		<List
			actions={<Actions />}
			resource='order'
			sort={{ field: 'createDate', order: 'ASC' }}
		>
			<DatagridConfigurable rowClick={(id, res) => `/${res}/${id}/show`}>
				<TextField source='id' label='Id' />
				<TextField source='name' label='Имя заказчика' />
				<TextField source='status' label='Статус заказа' />
				<TextField source='total' label='Итоговая сумма' />
			</DatagridConfigurable>
		</List>
	)
}
