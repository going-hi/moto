import { Typography, Icon, Button } from '@/shared'

const { Text } = Typography

export const FavouritesEmpty = () => {
	return (
		<div className='flex flex-col items-center py-[50px]'>
			<Icon
				name='FullHeart'
				color='white'
				className='mb-[20px] w-[170px] h-[170px]'
			/>
			<Text className='font-extrabold uppercase mb-[50px] text-[24px] text-beige'>
				В избранном пока нет товаров
			</Text>
			<Button
				path='/catalog'
				variant='primary'
				className='max-w-[500px] uppercase'
			>
				Перейти в каталог
			</Button>
		</div>
	)
}
