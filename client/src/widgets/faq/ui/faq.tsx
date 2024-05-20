import { Accordion, Typography } from '@/shared'
import { faqItemsArr } from '../model'
import { Container, Layout } from '@/layout'

const { Title } = Typography

export const Faq = () => {
	return (
		<section>
			<Container bodyClassName='bg-black !px-0 pb-[50px]'>
				<Layout type='single' variant='part'>
					<Title variant='h2' className='text-gray-light'>
						FAQ
					</Title>
				</Layout>
				{faqItemsArr.map(({ title, description }, index) => (
					<Accordion
						variant='faq'
						title={title}
						index={index + 1}
						isLast={faqItemsArr.length === index + 1}
						key={String(index)}
					>
						{description}
					</Accordion>
				))}
			</Container>
		</section>
	)
}
