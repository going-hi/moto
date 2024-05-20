import { Typography } from '@/shared'
import { Container } from '@/layout'

const { Title, Text } = Typography

export const About = () => {
	return (
		<section className='bg-light-red py-[100px]'>
			<Container bodyClassName='pl-0 pr-[40px]'>
				<div className='mb-[20px] '>
					<div className='flex float-right'>
						{[1, 2, 3].map(i => (
							<img
								key={String(i)}
								src='/helmet.png'
								alt='helmet'
								className='w-[340px]'
							/>
						))}
					</div>
					<Title
						className='text-beige leading-[103px] text-right'
						variant='h2'
					>
						В ТЕХНАРЬ 33, УДОВЛЕТВОРЕНИЕ КЛИЕНТОВ НА <br /> ПЕРВОМ
						МЕСТЕ,
						<br />
						МЫ СТРЕМИМСЯ ПРЕВЗОЙТИ ОЖИДАНИЯ И ПРЕДЛОЖИТЬ УНИКАЛЬНЫЕ
						ТОВАРЫ И УСЛУГУ, УДОВЛЕТВОРЯЮЩИЕ ПОТРЕБНОСТИ КАЖДОГО.
					</Title>
				</div>
			</Container>
			<div className='flex justify-center'>
				<Text className='text-beige max-w-[340px] -tracking-2per uppercase leading-[18px]'>
					Ознакомьтесь с нашей обширной коллекцией мотоциклов - от
					классических круизеров до мощных спортбайков, среди которых
					найдется идеальный вариант для каждого водителя
				</Text>
			</div>
		</section>
	)
}
