import { cards } from '@/shared'
import { List } from './@list'
import { Container } from '@/layout'

export const NewProducts = () => {
	return (
		<section className=''>
			<Container bodyClassName='bg-beige flex flex-col gap-y-[100px] py-[50px] '>
				<List list={cards} title='MOTOLAND' mainTitle='НОВИНКИ' />
				<List list={cards} title='PWR RACING' />
			</Container>
		</section>
	)
}
