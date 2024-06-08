import { Actions, RolesMap } from '@/shared'
import {
	DatagridConfigurable,
	FunctionField,
	List,
	SearchInput,
	TextField
} from 'react-admin'
import { useCanAccess } from '@/shared'

export const UserList = () => {
	const p = useCanAccess({
		resource: 'user',
		action: 'read'
	})

	return (
		<List
			resource='user'
			sort={{ field: 'createDate', order: 'ASC' }}
			actions={<Actions />}
			filters={[
				<SearchInput source='q' alwaysOn placeholder='Поиск по имени' />
			]}
		>
			<DatagridConfigurable
				className='mt-[10px]'
				rowClick={(id, res) => `/${res}/${id}/show`}
			>
				<TextField source='id' label='Id' emptyText='нет' />
				<FunctionField
					label='Имя'
					// @ts-expect-error
					render={record => `${record.name} ${record.surname}`}
					emptyText='нет'
				/>
				<TextField source='email' label='Почта' emptyText='нет' />
				<TextField source='phone' label='Телефон' emptyText='нет' />
				<FunctionField
					label='Роль'
					render={
						// @ts-expect-error
						record => RolesMap[record.role]
					}
					emptyText='нет'
				/>
			</DatagridConfigurable>
		</List>
	)
}
