import { Typography } from '@/shared'
import { ReviewsSlider } from './@slider'
import { Container, Layout } from '@/layout'

const { Title } = Typography

export const Reviews = () => {
	return (
		<section>
			<Container bodyClassName='bg-black py-[50px]'>
				<Layout type='single' variant='part'>
					<Title variant='h2' className='text-gray-light'>
						ОТЗЫВЫ
					</Title>
				</Layout>
				<ReviewsSlider />
			</Container>
		</section>
	)
}
