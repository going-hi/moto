import { Button, Typography } from '@/shared'
import { Container, Layout } from '@/layout'

const { Title, Text } = Typography

export const AboutUs = () => {
	return (
		<section>
			<Container bodyClassName='bg-beige py-[50px]'>
				<div className='mb-[20px]'>
					<Layout variant='part' type='single'>
						<Title className='leading-[103px]' variant='h2'>
							О НАС
						</Title>
					</Layout>
					<Title
						variant='h2'
						className='max-w-[80%] leading-[103px] text-red-light'
					>
						МЫ ВАШ{' '}
						<span className='text-black'>
							УНИВЕРСАЛЬНЫЙ МАГАЗИН
						</span>
						<br />
						ДЛЯ ШИРОКОГО ВЫБОРА МОТОЦИКЛОВ,
					</Title>
					<Layout variant='part' type='single'>
						<Title variant='h2' className='leading-[103px]'>
							И МНОГОГО ДРУГОГО!
						</Title>
					</Layout>
				</div>
				<Layout
					type='multi'
					variant='full'
					className='text-[32px] font-medium leading-[37px]'
				>
					<div className='pr-[45px] max-w-[90%]'>
						<Text className='text-right mb-[20px]'>
							МЫ ЗАНИМАЕМСЯ ПРОДАЖЕЙ{' '}
							<span className='bg-red-light text-beige'>
								МОТОТЕХНИКИ И ВЕЛОТЕХНИКИ
							</span>{' '}
							УЖЕ НА ПРОТЯЖЕНИИ НЕСКОЛЬКИХ ЛЕТ. ИМЕЕМ БОЛЬШОЙ ОПЫТ
							В{' '}
							<span className='bg-black text-beige'>
								ЭТОМ РЕМЕСЛЕ
							</span>
						</Text>
						<Text className='mb-[6px] text-right'>
							МЫ - ОФИЦИАЛЬНЫЕ ДИЛЕРЫ
							<br />
							<span className='text-beige bg-red-light'>
								MOTOLAND.
							</span>
						</Text>
						<Text className='text-right'>
							ВСЮ ТЕХНИКУ ПОСТАВЛЯЕМ В<br />
							<span className='bg-black text-beige'>
								СОБРАННОМ ВИДЕ.
							</span>
						</Text>
					</div>
					<div className='flex'>
						<div className='basis-[32%]'>
							<div className='relative pb-[100%] mb-[20px]'>
								<img
									className='absolute top-0 left-0 h-full w-full'
									src='/brutal_man.png'
									alt='Мужчина'
								/>
							</div>
							<Text className='mb-[20px] text-[20px] -tracking-2per leading-[24px]'>
								Даём гарантию на технику от себя. У нас всегда
								низкие цены на весь модельный ряд. Так же
								предоставляем отдельные скидки на мотозапчасти и
								аксессуары, экипировку.
							</Text>
							<Button
								className='max-w-[200px]'
								variant='parentheses-link'
								isMain
							>
								ПОДРОБНЕЕ
							</Button>
						</div>
						<div className='basis-[28%]'>
							<div className='bg-red-light p-[6px] pb-[34px]'>
								<Text className='text-[20px] font-medium text-beige leading-[20px]'>
									Официальные дилеры Motoland
								</Text>
							</div>
							<div className='relative pb-[87.5%]'>
								<img
									className='absolute top-0 left-0 w-full h-full'
									src='/sunset_bike.png'
									alt='Мотоцикл'
								/>
							</div>
						</div>
					</div>
				</Layout>
			</Container>
		</section>
	)
}
