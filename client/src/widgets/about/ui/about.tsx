import { Typography } from '@/shared'
import { Container } from '@/layout'

const { Title, Text } = Typography

export const About = () => {
	return (
		<section className='bg-red py-[100px]'>
			<Container>
				<div className='mb-[20px] '>
					<div className='flex float-right'>
						{[1, 2, 3].map(() => (
							<img src='/helmet.png' alt='helmet' />
						))}
					</div>
					<Title
						className='text-beige leading-[103px] text-right'
						variant='h2'
					>
						В ТЕХНАРЬ 33, УДОВЛЕТВОРЕНИЕ КЛИЕНТОВ НА ПЕРВОМ МЕСТЕ,
						МЫ СТРЕМИМСЯ ПРЕВЗОЙТИ ОЖИДАНИЯ И ПРЕДЛОЖИТЬ УНИКАЛЬНЫЕ
						ТОВАРЫ И УСЛУГУ, УДОВЛЕТВОРЯЮЩИЕ ПОТРЕБНОСТИ КАЖДОГО.
					</Title>
				</div>
				<div className='flex justify-center'>
					<Text className='text-beige max-w-[380px] '>
						Ознакомьтесь с нашей обширной коллекцией мотоциклов - от
						классических круизеров до мощных спортбайков, среди
						которых найдется идеальный вариант для каждого водителя
					</Text>
				</div>
			</Container>
		</section>
	)
}
