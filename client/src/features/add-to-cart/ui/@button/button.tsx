import { Button } from '@/shared'

export const AddToCartButton = () => {
	return (
		<Button
			variant='parentheses-button'
			className='h-full basis-[100%] dhover:hover:scale-[101%] duration-700'
			isMain
		>
			ДОБАВИТЬ В КОРЗИНУ
		</Button>
	)
}
