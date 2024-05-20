import { Button } from '@/shared'

export const AddToFavouritesButton = () => {
	return (
		<Button
			iconName='Heart'
			variant='icon'
			color='white'
			className='bg-black p-[20px] group dhover:hover:scale-105 duration-700'
			bodyClassName='dhover:group-hover:scale-105 duration-700'
		/>
	)
}
