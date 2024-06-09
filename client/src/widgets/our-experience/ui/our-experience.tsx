import { Typography } from '@/shared'
import { Layout } from '@/layout'

const { Title, Text } = Typography

export const OurExperience = () => {
	return (
		<div className='mb-[80px]'>
			<div className='mb-[20px]'>
				<Layout variant='part' type='single'>
					<Title variant='h2' className='leading-[110px]'>
						Мы занимаемся продажей
						<br />
						<span className='text-red-light'>
							мототехники и велотехники
						</span>
					</Title>
				</Layout>
				<Title variant='h2' className='leading-[115px]'>
					уже на протяжении многих лет и обладаем{' '}
					<span className='text-red-light'>богатым опытом</span> в
					этом деле.
				</Title>
			</div>
			<Layout type='single' variant='part'>
				<div className='flex justify-between'>
					<div className='max-w-[500px] text-[20px] leading-[27px] font-medium'>
						<Text className='mb-[25px]'>
							Наша главная цель — предложить клиентам качественную
							технику по доступным ценам и обеспечить высокий
							уровень обслуживания.
						</Text>
						<Text>
							Сегодня наша компания предлагает более 150 моделей
							мототехники для путешествий, развлечений и занятий
							экстремальными видами спорта. Мы предлагаем технику
							высокого качества, с современной комплектацией и
							дизайном.
						</Text>
					</div>
					<div>
						<img src='/our-experience.png' alt='Наш опыт' />
					</div>
				</div>
			</Layout>
		</div>
	)
}
