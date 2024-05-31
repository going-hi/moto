import { List } from './@list'
import { Container } from '@/layout'

export const NewProducts = () => {
	return (
		<section className=''>
			<Container bodyClassName='bg-beige flex flex-col gap-y-[100px] py-[50px] '>
				<List list={[]} title='MOTOLAND' mainTitle='НОВИНКИ' />
				<List list={[]} title='PWR RACING' />
			</Container>
		</section>
	)
}
