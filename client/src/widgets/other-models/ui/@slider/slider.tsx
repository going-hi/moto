import type { TCard } from '@/entities/card'
import { Slider } from '@/shared'
import { OtherModelsSlide } from '../@slide'
import { OtherModelsSlideSkeleton } from '../@slide-skeleton'

export const OtherModelsSlider = ({ list }: { list?: TCard[] }) => {
	if (!list) {
		return <></>
	}

	return (
		<Slider type='default' classNameBody='pb-[20px]'>
			<></>
			{list.map((i, index) =>
				i ? (
					<OtherModelsSlide {...i} key={String(i.id)} />
				) : (
					<OtherModelsSlideSkeleton key={String(index)} />
				)
			)}
		</Slider>
	)
}
