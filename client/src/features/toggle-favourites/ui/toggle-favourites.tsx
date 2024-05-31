import { ToggleFavouritesButton } from './@button'
import { ToggleFavouritesLabel } from './@label'

export const ToggleFavourites = ({
	variant,
	...props
}: {
	variant: 'button' | 'label'
	className?: string
	id: number
}) => {
	switch (variant) {
		case 'button':
			return <ToggleFavouritesButton {...props} />
		case 'label':
			return <ToggleFavouritesLabel {...props} />
		default:
			return <></>
	}
}
