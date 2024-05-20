import { ListItem, Typography } from '@/shared'
import { CardBodyAccordion } from '../@accordion'

const { Text } = Typography

export const CardBodyPaymentMethod = () => {
	return (
		<CardBodyAccordion type='container' title='Способы оплаты'>
			<ul className='pb-[15px]'>
				<ListItem variant='top'>
					<Text className='mb-[10px]'>
						Оплата наличными при получении товара
					</Text>
					<Text className='mb-[10px]'>
						Данный способ оплаты действует только при доставке
						курьером.
					</Text>
					<Text className='mb-[10px]'>
						При данном способе оплаты Вы оплачиваете заказ курьеру
						при получении или самовывозом в магазине.
					</Text>
				</ListItem>
				<ListItem variant='top'>
					<Text className='mb-[10px]'>
						Оплата по безналичному расчёту
					</Text>
					<Text className='mb-[10px]'>
						При данном способе оплаты менеджер подтверждает Ваш
						заказ, после чего выставляет счёт на оплату.
					</Text>
					<Text>Счёт действует в течение 5 рабочих дней.</Text>
				</ListItem>
			</ul>
		</CardBodyAccordion>
	)
}
