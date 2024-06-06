import { Admin } from 'react-admin'
import { CardResource } from '@/entities/card'

export const App = () => (
	<Admin title='Moto'>
		<CardResource />
	</Admin>
)
