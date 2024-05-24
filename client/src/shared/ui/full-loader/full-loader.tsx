import { Icon } from '../icon'

export const FullLoader = () => {
	return (
		<div className='h-[100dvh] w-[100dvw] flex items-center justify-center bg-red-light'>
			<Icon
				name='Loading'
				className='animate-spin-1000 w-[40px] h-[40px]'
				color='white'
			/>
		</div>
	)
}
