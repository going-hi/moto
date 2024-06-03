import { Typography, Button } from '@/shared'
import { Footer, Header, Wrapper } from '@/layout'

const { Text } = Typography

export const NotFoundPage = () => {
	return (
		<Wrapper>
			<Header />
			<div className='flex items-center flex-col py-[100px]'>
				<Text className='font-bold text-[400px] text-white leading-[270px] bebas'>
					404
				</Text>
				<Text className='mb-[50px] text-[24px] uppercase text-white font-extrabold'>
					СТРАНИЦА НЕ НАЙДЕНА
				</Text>
				<Button
					variant='primary'
					path='/catalog'
					className='max-w-[500px] uppercase'
				>
					Вернуться на главную
				</Button>
			</div>
			<Footer />
		</Wrapper>
	)
}
