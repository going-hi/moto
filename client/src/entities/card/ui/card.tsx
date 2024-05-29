import type { TCardProps } from '../model'
import { CardBasket } from './@basket'
import { CardCatalog } from './@catalog'
import { CardPrimary } from './@primary'

export const Card = ({
	variant,
	...props
}: TCardProps & { count?: number }) => {
	switch (variant) {
		case 'catalog':
			return <CardCatalog {...props} />
		case 'primary':
			return <CardPrimary {...props} />
		case 'basket':
			return <CardBasket {...props} />
		default:
			return <></>
	}
}
