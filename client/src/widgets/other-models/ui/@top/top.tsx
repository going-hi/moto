import { Typography, useSlider } from '@/shared'
import { OtherModelsArrow } from '../@arrow'
import { Layout } from '@/layout'

const { Title } = Typography

export const OtherModelsTop = () => {
	const { sliderApi } = useSlider()

	const onClick = (type: 'back' | 'forward') => {
		if (!sliderApi) return

		type === 'back' ? sliderApi.scrollPrev() : sliderApi.scrollNext()
	}

	return (
		<>
			<Layout type='multi' variant='full'>
				<Title variant='h2' className='text-gray-light'>
					ДРУГИЕ МОДЕЛИ
				</Title>
				<div className='flex gap-x-[15px] items-center pl-[190px]'>
					<OtherModelsArrow
						onClick={() => onClick('back')}
						variant='left'
					/>
					<OtherModelsArrow
						onClick={() => onClick('forward')}
						variant='right'
					/>
				</div>
			</Layout>
		</>
	)
}
