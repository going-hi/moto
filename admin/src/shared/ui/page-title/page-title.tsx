import { useRecordContext } from 'react-admin'
import { formatTitle } from './@format-tile'

export const PageTitle = ({ field }: { field?: string }) => {
	const record = useRecordContext()

	return <>{record ? formatTitle(field ? record[field] : record.name) : ''}</>
}
