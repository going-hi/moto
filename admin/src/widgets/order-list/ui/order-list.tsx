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
				<TextField source='id' label='Id' emptyText='нет' />
				<TextField
					source='name'
					label='Имя заказчика'
					emptyText='нет'
				/>
				<TextField
					source='status'
					label='Статус заказа'
					emptyText='нет'
				/>
				<TextField
					source='total'
					label='Итоговая сумма'
					emptyText='нет'
				/>
			</DatagridConfigurable>
		</List>
	)
}
