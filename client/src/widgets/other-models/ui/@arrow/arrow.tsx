import { ButtonHTMLAttributes } from 'react'
import { Icon } from '@/shared'

export const OtherModelsArrow = ({
	variant,
	...props
}: {
	variant: 'left' | 'right'
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} className='bg-[#161616] p-[15px]'>
			<Icon name={variant === 'left' ? 'ArrowLeft' : 'ArrowRight'} />
		</button>
	)
}
