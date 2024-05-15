import { Typography } from '@/shared'
import { PopularSlider } from './@slider'
import { Layout, Container } from '@/layout'

const { Title } = Typography

export const Popular = () => {
	return (
		<section className='bg-black'>
			<Container>
				<Layout type='single' variant='part'>
					<Title className='text-white opacity-20' variant='h2'>
						ПОПУЛЯРНЫЕ ТОВАРЫ
					</Title>
				</Layout>
				<PopularSlider />
			</Container>
		</section>
	)
}
