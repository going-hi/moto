import { OrderCart } from '@/widgets/order-cart'
import { OrderForm } from '@/widgets/order-form'
import { Typography } from '@/shared'
import { Wrapper, Header, Footer, Container } from '@/layout'

const { Title } = Typography

export const CreateOrderPage = () => {
	return (
		<Wrapper>
			<Header />
			<Container className='mb-[10px]'>
				<Title variant='h2' className='text-white'>
					Оформление заказа
				</Title>
				<div className='bg-beige flex p-[15px] justify-between'>
					<OrderForm />
					<OrderCart />
				</div>
			</Container>
			<Footer />
		</Wrapper>
	)
}
