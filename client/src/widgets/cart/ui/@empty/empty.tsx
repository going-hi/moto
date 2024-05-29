import { Button, Typography } from '@/shared'

const { Title } = Typography

export const CartEmpty = () => {
	return (
		<div className='mt-[100px] flex flex-col items-center'>
			<Title variant='h5' className='uppercase -tracking-2per mb-[50px]'>
				В корзине нет товаров
			</Title>
			<Button
				variant='primary'
				path='/catalog'
				className='py-[19px] max-w-[60%]'
			>
				ПЕРЕЙТИ В КАТАЛОГ
			</Button>
		</div>
	)
}
