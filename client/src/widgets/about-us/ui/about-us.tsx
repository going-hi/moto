import { Typography } from '@/shared'
import { Container, Layout } from '@/layout'

const { Title } = Typography

export const AboutUs = () => {
	return (
		<section>
			<Container bodyClassName='bg-beige'>
				<div className='mb-[20px]'>
					<Layout variant='part' type='single'>
						<Title variant='h2'>О НАС</Title>
					</Layout>
					<Title
						variant='h2'
						className='max-w-[75%] leading-[103px] text-red-light'
					>
						МЫ ВАШ{' '}
						<span className='text-black'>
							УНИВЕРСАЛЬНЫЙ МАГАЗИН
						</span>{' '}
						ДЛЯ ШИРОКОГО ВЫБОРА МОТОЦИКЛОВ,
					</Title>
					<Layout variant='part' type='single'>
						<Title variant='h2' className='leading-[103px]'>
							И МНОГОГО ДРУГОГО!
						</Title>
					</Layout>
				</div>
			</Container>
		</section>
	)
}
