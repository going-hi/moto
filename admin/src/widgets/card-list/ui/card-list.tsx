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
				<TextField source='name' label='Название' emptyText='нет' />
				<TextField source='price' label='Цена' emptyText='нет' />
				<TextField
					source='category'
					label='Категория'
					emptyText='нет'
				/>
				<TextField
					source='type'
					label='Тип'
					sortable={false}
					emptyText='нет'
				/>
				<TextField
					source='countOrders'
					label='Количество заказов'
					emptyText='нет'
				/>
			</DatagridConfigurable>
		</List>
	)
}
