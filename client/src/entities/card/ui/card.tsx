import type { TCardProps } from '../model'
import { CardCatalog } from './@catalog'
import { CardPrimary } from './@primary'

export const Card = ({ variant, ...props }: TCardProps) => {
	switch (variant) {
		case 'catalog':
			return <CardCatalog {...props} />
		case 'primary':
			return <CardPrimary {...props} />
		default:
			return <></>
	}
}
