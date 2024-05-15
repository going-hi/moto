import { Typography } from '@/shared'
import { ReviewsSlider } from './@slider'
import { Container, Layout } from '@/layout'

const { Title } = Typography

export const Reviews = () => {
	return (
		<section className='bg-black'>
			<Container>
				<Layout type='single' variant='part'>
					<Title variant='h2' className='text-white opacity-20'>
						ОТЗЫВЫ
					</Title>
				</Layout>
				<ReviewsSlider />
			</Container>
		</section>
	)
}
