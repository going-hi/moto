import { catalogAccordionItemsArr } from '../model'
import { CatalogItem } from './@item'
import { Container } from '@/layout'

export const CatalogAccordion = () => {
	return (
		<section>
			<Container bodyClassName='bg-black !px-0'>
				{catalogAccordionItemsArr.map((i, index) => (
					<CatalogItem key={i.title} {...i} index={index + 1} />
				))}
			</Container>
		</section>
	)
}
