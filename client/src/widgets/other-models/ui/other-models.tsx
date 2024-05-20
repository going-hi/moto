import { SliderProvider } from '@/shared'
import { OtherModelsSlider } from './@slider'
import { OtherModelsTop } from './@top'
import { Container } from '@/layout'

export const OtherModels = () => {
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
				<>
					<OtherModelsTop />
					<OtherModelsSlider />
				</>
			</SliderProvider>
		</Container>
	)
}
