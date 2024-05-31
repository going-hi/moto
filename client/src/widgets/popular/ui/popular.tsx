import { useGetCards } from '@/entities/card'
import { Typography } from '@/shared'
import { PopularSlider } from './@slider'
import { Layout, Container } from '@/layout'

const { Title } = Typography

export const Popular = () => {
	const { isLoading, data } = useGetCards({ sortBy: 'countOrders' })

	return (
		<section>
			<Container bodyClassName='bg-black py-[50px]'>
				<Layout type='single' variant='part'>
					<Title className='text-gray-light' variant='h2'>
						ПОПУЛЯРНЫЕ ТОВАРЫ
					</Title>
				</Layout>
				<PopularSlider
					isLoading={isLoading}
					list={isLoading ? [...new Array(6)] : data?.items ?? []}
				/>
			</Container>
		</section>
	)
}
