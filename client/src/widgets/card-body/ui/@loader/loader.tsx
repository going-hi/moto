import { Icon } from '@/shared'

export const CardBodyLoader = () => {
	return (
		<div className='py-[50px] flex justify-center'>
			<Icon
				className='w-[40px] h-[40px] animate-spin-1000'
				name='Loading'
			/>
		</div>
	)
}
