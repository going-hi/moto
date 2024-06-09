import { Typography } from '@/shared'
import { Container } from '@/layout'

const { Title, Text } = Typography

export const AboutBanner = () => {
	return (
		<Container className='h-[calc(100dvh-130px)] text-beige'>
			<Text className='text-[38px] uppercase -tracking-2per font-medium'>
				Широкий выбор мототехники, велосипедов садового инвентаря и
				многое другое!
			</Text>
			<Title variant='h2' className='text-[475px] leading-[475px]'>
				О КОМПАНИИ
			</Title>
			<div>
				<img
					className='-translate-y-[57%] translate-x-[35%]'
					src='/about-banner.png'
					alt='о нас'
				/>
			</div>
		</Container>
	)
}
