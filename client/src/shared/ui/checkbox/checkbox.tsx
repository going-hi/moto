import clsx from 'clsx'
import { forwardRef } from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import { Icon } from '../icon'

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef<
	HTMLInputElement,
	{
		id: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		field: ControllerRenderProps<any, any>
		className?: string
	}
>(({ id, field, className }, ref) => {
	return (
		<label
			htmlFor={id}
			className={clsx(
				'w-[25px] h-[25px] border-gray-dark border flex items-center justify-center cursor-pointer',
				className
			)}
		>
			<input
				id={id}
				type='checkbox'
				className='w-0 h-0'
				{...field}
				ref={ref}
			/>
			{field.value === true && <Icon name='Check' />}
		</label>
	)
})
