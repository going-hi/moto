import { Icon } from '@/shared'

export const CartLoader = () => {
	return (
		<div className='w-full flex justify-center pt-[50px]'>
			<Icon
				className='w-[40px] h-[40px] animate-spin-1000'
				name='Loading'
			/>
		</div>
	)
}
