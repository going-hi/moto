import { useGetReviews } from '@/entities/review'
import { Typography } from '@/shared'
import { ReviewsSlider } from './@slider'
import { Container, Layout } from '@/layout'

const { Title } = Typography

export const Reviews = () => {
	const { isLoading, data } = useGetReviews()

	return (
		<section>
			<Container bodyClassName='bg-black py-[50px]'>
				<Layout type='single' variant='part'>
					<Title variant='h2' className='text-gray-light'>
						ОТЗЫВЫ
					</Title>
				</Layout>
				<ReviewsSlider
					list={isLoading ? [...new Array(6)] : data?.items ?? []}
				/>
			</Container>
		</section>
	)
}
