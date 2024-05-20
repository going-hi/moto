import { ListItem, Typography } from '@/shared'
import { CardBodyAccordion } from '../@accordion'

const { Text } = Typography

export const CardBodyDelivery = () => {
	return (
		<CardBodyAccordion title='Доставка' isLast>
			<ul>
				<ListItem variant='top' className='mb-[20px]'>
					<Text className='mb-[10px]'>
						Курьерская доставка по Владимирской области
					</Text>
					<Text className='mb-[15px]'>
						Доставка производится курьером в течении 1-3 дней
					</Text>
					<ol className='list-decimal pl-[20px]'>
						<li className='mb-[5px]'>
							<Text>
								доставка товара менее 3кг составляет 350 руб
							</Text>
						</li>
						<li className='mb-[5px]'>
							<Text>
								доставка товара более 3кг составляет 500 руб
							</Text>
						</li>
					</ol>
				</ListItem>
				<ListItem variant='top' className='mb-[20px] before:top-[3%]'>
					<Text className='mb-[10px]'>
						Транспортная доставка по Владимирской области
					</Text>
					<Text className='mb-[15px]'>
						Доставка производится автотранспортом Компании в течении
						2-4 дней и оплачивается при получении товара. Доставка
						оплачивается при получении товара и зависит от веса и
						типа товара:
					</Text>
					<ol className='list-decimal pl-[20px]'>
						<li className='mb-[5px]'>
							доставка скутера или мотоцикла 50см3 - 125 см
							составляет 3 000 руб
						</li>
						<li className='mb-[5px]'>
							доставка максискутера и детского квадроцикла
							составляет 3 000 руб
						</li>
						<li className='mb-[5px]'>
							доставка квадроцикла составляет 4 500 руб
						</li>
					</ol>
				</ListItem>
				<ListItem variant='top' className='mb-[20px] before:top-[3%]'>
					<Text className='mb-[10px]'>
						Доставка СДЕК по России. Экспресс-доставка
					</Text>
					<Text className='mb-[10px]'>
						Стоимость услуги экспресс-доставки рассчитывается с
						учетом параметров:
					</Text>
					<ol className='mb-[10px] list-decimal pl-[20px]'>
						<li>
							Местонахождение населенных пунктов отправителя и
							получателя
						</li>
						<li>
							Вес отправления (максимальный вес отправления – 31,5
							кг.)
						</li>
					</ol>
					<Text className='mb-[10px]'>
						Все сроки доставки отправлений СДЕК рассчитываются в
						зависимости от принадлежности населенных пунктов
						отправителя и получателя к той или иной тарифной зоне и
						в среднем составляют от 2 до 5 дней.
					</Text>
					<Text>
						Доставка СДЕК осуществляется только после 10% аванса.
						Подробнее узнать вы можете на сайте www.cdek.ru
					</Text>
				</ListItem>
			</ul>
		</CardBodyAccordion>
	)
}
