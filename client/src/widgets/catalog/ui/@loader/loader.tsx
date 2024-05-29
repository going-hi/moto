import { Icon } from '@/shared'

export const CatalogLoader = () => {
	return (
		<div className='flex justify-center py-[50px]'>
			<Icon
				name='Loading'
				className='w-[40px] h-[40px] animate-spin-1000'
				color='#fff'
			/>
		</div>
	)
}
