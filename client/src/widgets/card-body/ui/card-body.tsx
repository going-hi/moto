import { cards } from '@/shared'
import { CardBodyGallery } from './@gallery'
import { CardBodyInfo } from './@info'
import { Container } from '@/layout'

export const CardBody = () => {
	return (
		<Container className='mb-[10px]'>
			<section className='flex'>
				<CardBodyGallery />
				<CardBodyInfo {...cards[0]} />
			</section>
		</Container>
	)
}
