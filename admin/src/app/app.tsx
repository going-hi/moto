import { Admin, AppBar, Layout, TitlePortal, UserMenu } from 'react-admin'
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
import { UserList } from '@/widgets/user-list'
import { UserShow } from '@/widgets/user-show'
import { EditUser } from '@/features/edit-user'
import { authProvider, LogoutButton } from '@/features/auth-user'
import { CreateProduct } from '@/features/create-product'
import { EditProduct } from '@/features/edit-product'

const MyUserMenu = () => (
	<UserMenu>
		<LogoutButton />
	</UserMenu>
)

const MyAppBar = () => (
	<AppBar userMenu={<MyUserMenu />}>
		<TitlePortal />
	</AppBar>
)

const MyLayout = (props: any) => {
	return (
		<>
			<Layout {...props} appBar={MyAppBar} />
		</>
	)
}

export const App = () => {
	const queryClient = new QueryClient(reactQueryConfig)

	return (
		<Admin
			title='Moto'
			dataProvider={dataProvider}
			queryClient={queryClient}
			authProvider={authProvider}
			requireAuth
			layout={MyLayout}
		>
			<Resource
				name='product'
				show={CardShow}
				list={CardList}
				edit={EditProduct}
				create={CreateProduct}
			/>
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
			<Resource
				name='user'
				list={UserList}
				show={UserShow}
				edit={EditUser}
			/>
		</Admin>
	)
}
