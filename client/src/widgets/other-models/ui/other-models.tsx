import { useGetCards, type TGetCards } from '@/entities/card'
import { SliderProvider } from '@/shared'
import { OtherModelsSlider } from './@slider'
import { OtherModelsTop } from './@top'
import { Container } from '@/layout'

export const OtherModels = ({
	body,
	isCardLoading
}: {
	body: TGetCards
	isCardLoading: boolean
}) => {
	const { data, isLoading: isCardsLoading } = useGetCards(body)

	const isLoading = isCardsLoading || isCardLoading

	return (
		<Container bodyClassName='bg-black py-[50px] mb-[10px]'>
			<SliderProvider
				options={{
					loop: true,
					containScroll: 'keepSnaps',
					align: 'start',
					watchDrag: false
				}}
			>
				<OtherModelsTop />
				<OtherModelsSlider
					isLoading={isLoading}
					list={isLoading ? [...new Array(7)] : data?.items}
				/>
			</SliderProvider>
		</Container>
	)
}
