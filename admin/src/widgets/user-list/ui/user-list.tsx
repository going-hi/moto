import { Actions, RolesMap } from '@/shared'
import {
	DatagridConfigurable,
	FunctionField,
	List,
	SearchInput,
	TextField
} from 'react-admin'

export const UserList = () => {
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
				<TextField source='id' label='Id' />
				<FunctionField
					label='Имя'
					// @ts-expect-error
					render={record => `${record.name} ${record.surname}`}
				/>
				<TextField source='email' label='Почта' />
				<TextField source='phone' label='Телефон' />
				<FunctionField
					label='Роль'
					render={
						// @ts-expect-error
						record => RolesMap[record.role]
					}
				/>
			</DatagridConfigurable>
		</List>
	)
}
