import clsx from 'clsx'
import type { TCard } from '@/entities/card'
import { Slider } from '@/shared'
import { OtherModelsSlide } from '../@slide'
import { OtherModelsSlideSkeleton } from '../@slide-skeleton'

export const OtherModelsSlider = ({
	list,
	isLoading
}: {
	list?: TCard[]
	isLoading: boolean
}) => {
	if (!list) {
		return <></>
	}

	return (
		<Slider
			type='default'
			classNameBody={clsx('pb-[20px]', isLoading && 'gap-x-[50px]')}
		>
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
