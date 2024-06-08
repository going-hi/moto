import { Admin } from 'react-admin'
import { Resource } from 'react-admin'
import { CardList } from '@/widgets/card-list'
import { CardShow } from '@/widgets/card-show'
import { ReviewList } from '@/widgets/review-list'
import { ReviewShow } from '@/widgets/review-show'
import { CreateReview } from '@/features/create-review'
import { EditReview } from '@/features/edit-review'
import { EditOrder } from '@/features/edit-order'
import { dataProvider } from '@/shared'
import './styles/index.css'
import { reactQueryConfig } from '@/shared'
import { QueryClient } from 'react-query'
import { OrderList } from '@/widgets/order-list'
import { OrderShow } from '@/widgets/order-show'

export const App = () => {
	const queryClient = new QueryClient(reactQueryConfig)

	return (
		<Admin
			title='Moto'
			dataProvider={dataProvider}
			queryClient={queryClient}
		>
			<Resource name='product' show={CardShow} list={CardList} />
			<Resource
				name='review'
				show={ReviewShow}
				list={ReviewList}
				create={CreateReview}
				edit={EditReview}
			/>
			<Resource
				name='order'
				edit={EditOrder}
				list={OrderList}
				show={OrderShow}
			/>
		</Admin>
	)
}
