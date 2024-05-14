import { EmblaCarouselType } from 'embla-carousel'

type TEmblaFn = {
	index: number
	jump?: boolean
	direction?: 0 | 1 | -1
}

export const scrollToSlide = ({
	api,
	index,
	jump,
	direction
}: TEmblaFn & {
	api: EmblaCarouselType
}) => {
	const scrollTo = api.scrollTo as (
		index: TEmblaFn['index'],
		jump?: TEmblaFn['jump'],
		direction?: TEmblaFn['direction']
	) => void

	scrollTo(index, jump, direction)
}
