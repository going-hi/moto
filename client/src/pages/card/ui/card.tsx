import { useEffect, useRef } from 'react'
import { z } from 'zod'
import { CardBody, scrollPage } from '@/widgets/card-body'
import { CardGallery } from '@/widgets/card-gallery'
import { OtherModels } from '@/widgets/other-models'
import { Typography, cards, useValidParams } from '@/shared'
import { Header, Footer, Container } from '@/layout'

const { Text } = Typography

export const CardPage = () => {
	const cardBodyRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const scroll = (e: WheelEvent) => {
			scrollPage(e, cardBodyRef)
		}

		// window.addEventListener('wheel', scroll)

		// return () => {
		// 	window.removeEventListener('wheel', scroll)
		// }
	}, [])

	const { id } = useValidParams({
		id: z.string().regex(/^[0-9]+$/)
	})

	if (!id) {
		return <Text>Параметр id карточки должен быть числом</Text>
	}

	return (
		<div className='bg-red-light pb-[10px]'>
			<Header />
			<Container className='mb-[10px]'>
				<section className='flex max-h-[874px]'>
					<CardGallery />
					<CardBody ref={cardBodyRef} {...cards[0]} />
				</section>
			</Container>
			<OtherModels />
			<Footer />
		</div>
	)
}
