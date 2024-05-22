import clsx from 'clsx'
import { Button } from '@/shared'

export const AddToFavouritesButton = ({
	variant,
	isActive,
	className
}: {
	variant: 'button' | 'label'
	isActive: boolean
	className?: string
}) => {
	return (
		<Button
			iconName={isActive ? 'FullHeart' : 'Heart'}
			variant='icon'
			color={variant === 'label' ? 'black' : '#D8CDC5'}
			className={clsx(
				variant === 'button' &&
					'bg-black p-[20px] group dhover:hover:scale-105 duration-700',
				className
			)}
			bodyClassName='dhover:group-hover:scale-105 duration-700'
		/>
	)
}
