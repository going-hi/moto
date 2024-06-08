import { EditButton, SaveButton, Toolbar } from 'react-admin'

export const EditToolbar = ({ isEdit }: { isEdit?: boolean }) => {
	return (
		<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<SaveButton type='button' />
			{isEdit && <EditButton />}
		</Toolbar>
	)
}
