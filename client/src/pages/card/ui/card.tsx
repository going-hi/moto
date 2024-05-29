import { z } from 'zod'
import { CardBody } from '@/widgets/card-body'
import { OtherModels } from '@/widgets/other-models'
import { Typography, useValidParams } from '@/shared'
import { Header, Footer, Container } from '@/layout'

const { Text } = Typography

export const CardPage = () => {
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
				<CardBody id={+id} />
			</Container>
			<OtherModels />
			<Footer />
		</div>
	)
}
