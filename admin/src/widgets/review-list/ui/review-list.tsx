import { DatagridConfigurable, List, TextField } from 'react-admin'
import { Actions } from '@/shared'

export const ReviewList = () => {
	return (
		<List
			actions={<Actions />}
			resource='review'
			sort={{ field: 'createDate', order: 'ASC' }}
		>
			<DatagridConfigurable>
				<TextField />
			</DatagridConfigurable>
		</List>
	)
}
